// // src/hooks/client/useClientGetProducts.ts
// import { useState } from "react";
// import { getWixProducts } from "../../../services/wixClient/products/getWixProducts";
// import { ProductItem } from "../../../types";
// import { formatProductResponse } from "../../../lib/format/formatProductResponse";


// export function useClientGetProducts() {
//   const [products, setProducts] = useState<ProductItem[] | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const getProducts = async (categoryId?: string, limit?: number) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const raw = await getWixProducts({ categoryId, limit });
//       const formatted = raw.map(formatProductResponse);
//       setProducts(formatted);
//     } catch (e: any) {
//       setError(e.message);
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { getProducts, products, loading, error };
// }