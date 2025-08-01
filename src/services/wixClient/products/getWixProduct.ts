import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";

interface GetProductOptions {
  // Add specific options you might use here, or keep as `any` if unknown
  [key: string]: any;
}

export async function getWixProduct(
  id: string,
  options?: GetProductOptions
): Promise<any | undefined> {
  const wixClient = await wixClientServerApi();

  try {
    const result = wixClient.products.getProduct(id, options);
    return result;
  } catch (error) {
    console.error(error);
    // Optionally rethrow or return undefined
    return undefined;
  }
}
