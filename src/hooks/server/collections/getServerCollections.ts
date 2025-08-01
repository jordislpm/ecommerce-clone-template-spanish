
import { getWixCollections } from '../../../services/wixClient/collections/getWixCollections';
import { formatCollectionResponse } from '../../../lib/format/formatCollectionResponse';

export async function getServerCollections(

) {
  const collections = await getWixCollections();
  return collections.map(formatCollectionResponse);
}