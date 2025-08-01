import { CollectionItem} from "../../types"; // or wherever your type is

export function formatCollectionResponse(raw: any): CollectionItem {
  return {
    _id: raw._id ?? "",
    name: raw.name ?? "",
    slug: raw.slug ?? "",
    description: raw.description ?? "",
    numberOfProducts: raw.numberOfProducts ?? 0,
    media: raw.media?.mainMedia?.image?.url
      ? {
          mainMedia: {
            image: {
              url: raw.media.mainMedia.image.url,
            },
          },
        }
      : undefined,
  };
}