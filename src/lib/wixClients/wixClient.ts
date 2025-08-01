import { redirects } from '@wix/redirects';
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders } from "@wix/ecom";
import Cookies from "js-cookie";
import { members } from '@wix/members';
import { currentCart } from "@wix/ecom";

export const wixClientServer = async () => {



 const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");


  const wixClient = createClient({
    modules: {
      products,
      collections,
      orders,
      members,
      currentCart,
      redirects
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};