import { products } from '@wix/stores';

import { formatPagination } from "../../../lib/format/formatPagination";
import { formatProductResponse } from "../../../lib/format/formatProductResponse";
import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";

export async function getServerProducts(
  categoryId?: string,
  limit?: number,
  searchParams?: any
) {
const res = await getWixProducts({ categoryId, limit, searchParams });



const pagination = formatPagination({hasNext: res.hasNext(), hasPrev: res.hasPrev(),currentPage: res.currentPage })
let products = res.items.map(formatProductResponse);


if(searchParams?.discount){
  console.log("with discount")

     products = products.filter((product)=> product.price?.discountedPrice !== product.price?.price)

    return {products, pagination}
} 
  return {products, pagination}

}