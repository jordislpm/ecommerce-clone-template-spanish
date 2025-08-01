
import { getWixCollections } from '../../../services/wixClient/collections/getWixCollections';
import { formatCollectionResponse } from '../../../lib/format/formatCollectionResponse';
import { getWixCollectionBySlug } from '../../../services/wixClient/collections/getWixCollectionBySlug';



interface GetServerColletionBySlug{
  slug: string;
}

export async function getServerColletionBySlug(slug: string) {

  const collection = await getWixCollectionBySlug(slug);
  return collection;
}