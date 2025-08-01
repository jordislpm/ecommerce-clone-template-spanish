import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";

interface GetWixProducts {
  categoryId?: string;
  limit?: number;
  searchParams?: any;
}

export async function getWixProducts({
  categoryId,
  limit,
  searchParams,
}: GetWixProducts = {}) {
  const PRODUCT_PER_PAGE = 20;
  const wixClient = await wixClientServerApi();

  let productQuery = wixClient.products.queryProducts();

  if (searchParams?.name) {
    productQuery = productQuery.startsWith("name", searchParams.name);
  }

  if (categoryId) {
    productQuery = productQuery.eq("collectionIds", categoryId);
  }

  if (searchParams?.type) {
    productQuery = productQuery.hasSome("productType", [searchParams.type]);
  } else {
    productQuery = productQuery.hasSome("productType", ["physical", "digital"]);
  }

  if (searchParams?.min) {
    productQuery = productQuery.gt("priceData.price", searchParams.min);
  }

  if (searchParams?.max) {
    productQuery = productQuery.lt("priceData.price", searchParams.max);
  }

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") productQuery = productQuery.ascending(sortBy);
    if (sortType === "desc") productQuery = productQuery.descending(sortBy);
  }

  productQuery = productQuery.limit(limit || PRODUCT_PER_PAGE);

  if (searchParams?.page) {
    productQuery = productQuery.skip(
      parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
    );
  }

    const res = await productQuery.find();
  return res;
}
