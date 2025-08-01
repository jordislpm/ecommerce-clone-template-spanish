import { products } from '@wix/stores';

import { formatProductResponse } from "../../../lib/format/formatProductResponse";
import { getWixProduct } from "../../../services/wixClient/products/getWixProduct";
import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";

interface GetProductOptions {
  // Add specific options you might use here, or keep as `any` if unknown
  [key: string]: any;
}

export async function getServerProduct(
  id: string,
  options?: GetProductOptions
) {
  const item = await getWixProduct(id, options);
  return formatProductResponse(item.product);
}