import { ProductItem } from "../../types";

export function formatProductResponse(raw: any): ProductItem {
  return {
    _id: raw._id ?? "",
    slug: raw.slug ?? "",
    name: raw.name ?? "",
    description: raw.description ?? "",
    price: raw.price
      ? {
          price: raw.price.price ?? 0,
          discountedPrice: raw.price.discountedPrice ?? raw.price.price ?? 0,
        }
      : undefined,
    stock: raw.stock ? { quantity: raw.stock.quantity ?? 0 } : undefined,
    media: {
      mainMedia: raw.media?.mainMedia
        ? { image: { url: raw.media.mainMedia.image?.url ?? "" } }
        : undefined,
      items: Array.isArray(raw.media?.items)
        ? raw.media.items.map((i: any) => ({
            image: { url: i.image?.url ?? "" },
          }))
        : [],
    },
    additionalInfoSections: Array.isArray(raw.additionalInfoSections)
      ? raw.additionalInfoSections.map((s: any) => ({
          title: s.title ?? "",
          description: s.description ?? "",
        }))
      : [],
    variants: Array.isArray(raw.variants)
      ? raw.variants.map((v: any) => ({
          _id: v._id ?? "",
          option: v.option ?? "",
          value: v.value ?? "",
          price: v.price
            ? {
                price: v.price.price ?? 0,
                discountedPrice: v.price.discountedPrice ?? v.price.price ?? 0,
              }
            : undefined,
          stock: v.stock
            ? {
                quantity: v.stock.quantity ?? 0,
                trackQuantity: v.stock.trackQuantity ?? false,
                inStock: v.stock.inStock ?? false,
              }
            : undefined,
          variant: v.variant
            ? {
                priceData: v.variant.priceData ?? null,
                convertedPriceData: v.variant.convertedPriceData ?? null,
                weight: v.variant.weight ?? null,
                sku: v.variant.sku ?? null,
                visible: v.variant.visible ?? null,
              }
            : undefined,
          choices: v.choices ?? null,
        }))
      : [],
    productOptions: Array.isArray(raw.productOptions)
      ? raw.productOptions.map((o: any) => ({
          name: o.name ?? "",
          choices: Array.isArray(o.choices)
            ? o.choices.map((c: any) => ({
                description: c.description ?? "",
                value: c.value ?? "",
              }))
            : [],
        }))
      : [],
  };
}
