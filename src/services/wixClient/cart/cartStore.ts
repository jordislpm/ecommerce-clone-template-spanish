import { create } from "zustand";
import { wixClientServer } from "../../../lib/wixClients/wixClient";
import { Cart, CartState } from "../../../types";
import { formatCartResponse } from "../../../lib/format/formatCartResponse";

const appId = process.env.NEXT_PUBLIC_WIX_APP_ID;
if (!appId) {
  throw new Error("Missing NEXT_PUBLIC_WIX_APP_ID");
}

export const cartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  counter: 0,

  getCart: async () => {
    set({ isLoading: true });
    try {
      const wixClient = await wixClientServer();
      const rawCart = await wixClient.currentCart.getCurrentCart();
      const formattedCart = formatCartResponse(rawCart);
      set({
        cart: formattedCart,
        isLoading: false,
        counter: formattedCart.lineItems.length,
      });
    } catch (err) {
      console.error("Error getting cart:", err);
      set({ isLoading: false });
    }
  },

  addItem: async (productId, variantId, quantity) => {
    set({ isLoading: true });
    try {
      const wixClient = await wixClientServer();
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId,
              catalogItemId: productId,
              ...(variantId && { options: { variantId } }),
            },
            quantity,
          },
        ],
      });

      const formattedCart = formatCartResponse(response.cart);
      set({
        cart: formattedCart,
        counter: formattedCart.lineItems.length,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error adding item:", err);
      set({ isLoading: false });
    }
  },

  removeItem: async (itemId) => {
    set({ isLoading: true });
    try {
      const wixClient = await wixClientServer();
      const response =
        await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);

      const formattedCart = formatCartResponse(response.cart);
      set({
        cart: formattedCart,
        counter: formattedCart.lineItems.length,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error removing item:", err);
      set({ isLoading: false });
    }
  },
  clearCart: async () => {
    set({ isLoading: true });
    try {
      const wixClient = await wixClientServer();
      const response = await wixClient.currentCart.deleteCurrentCart();

      console.log(response);
      set({
        cart: null,
        counter: 0,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error clearing cart:", err);
      set({ isLoading: false });
    }
  },
}));
