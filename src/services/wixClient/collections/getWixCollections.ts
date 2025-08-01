
import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";


interface GetWixProducts {
  categoryId?: string;
  limit?: number;
  searchParams?: any;
}

export async function getWixCollections() {
  const wixClient = await wixClientServerApi();

  const response = await wixClient.collections.queryCollections().find();

  return response.items;
}