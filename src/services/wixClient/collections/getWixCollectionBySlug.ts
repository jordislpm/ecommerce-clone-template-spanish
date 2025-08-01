import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";


export async function getWixCollectionBySlug(slug: string ) {
  const wixClient = await wixClientServerApi();

  const response = await wixClient.collections.getCollectionBySlug(
    slug || "all-products"
  );
  return response;
}
