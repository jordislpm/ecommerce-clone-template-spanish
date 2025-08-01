import { Cart, CartItem } from "../../types";
import { media as wixMedia } from "@wix/sdk";

export function formatCartResponse(raw: any): Cart {
  return {
    _id: raw._id ?? "",
    _createdDate: raw._createdDate ?? "",
    _updatedDate: raw._updatedDate ?? "",

    buyerInfo: {
      contactId: raw.buyerInfo?.contactId ?? "",
      memberId: raw.buyerInfo?.memberId ?? "",
    },

    buyerLanguage: raw.buyerLanguage ?? "",
    siteLanguage: raw.siteLanguage ?? "",
    currency: raw.currency ?? "",
    paymentCurrency: raw.paymentCurrency ?? "",
    conversionCurrency: raw.conversionCurrency ?? "",
    taxIncludedInPrices: raw.taxIncludedInPrices ?? false,
    weightUnit: raw.weightUnit ?? "",
    purchaseFlowId: raw.purchaseFlowId ?? "",
    managedByV2: raw.managedByV2 ?? false,

    appliedDiscounts: Array.isArray(raw.appliedDiscounts)
      ? raw.appliedDiscounts
      : [],
    discount: {
      amount: raw.discount?.amount ?? "0",
      convertedAmount: raw.discount?.convertedAmount ?? "0",
      formattedAmount: raw.discount?.formattedAmount ?? "C$0.00",
      formattedConvertedAmount:
        raw.discount?.formattedConvertedAmount ?? "C$0.00",
    },
    subtotal: {
      amount: raw.subtotal?.amount ?? "0",
      convertedAmount: raw.subtotal?.convertedAmount ?? "0",
      formattedAmount: raw.subtotal?.formattedAmount ?? "C$0.00",
      formattedConvertedAmount:
        raw.subtotal?.formattedConvertedAmount ?? "C$0.00",
    },
    subtotalAfterDiscounts: {
      amount: raw.subtotalAfterDiscounts?.amount ?? "0",
      convertedAmount: raw.subtotalAfterDiscounts?.convertedAmount ?? "0",
      formattedAmount: raw.subtotalAfterDiscounts?.formattedAmount ?? "C$0.00",
      formattedConvertedAmount:
        raw.subtotalAfterDiscounts?.formattedConvertedAmount ?? "C$0.00",
    },

    lineItems: Array.isArray(raw.lineItems)
      ? raw.lineItems.map(
          (item: any): CartItem => ({
            id: item._id ?? "",
            quantity: item.quantity ?? 0,
            name: item.productName?.original ?? "",
            price: item.price?.amount ?? "",
            availability: item.availability,
            descriptionLines : item.descriptionLines ?? [], 
            image:
              wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {}) ??
              "/product.png",
            catalogReference: item.catalogReference
              ? {
                  appId: item.catalogReference.appId ?? "",
                  catalogItemId: item.catalogReference.catalogItemId ?? "",
                  options: item.catalogReference.options ?? undefined,
                }
              : undefined,
          })
        )
      : [],
  };
}
