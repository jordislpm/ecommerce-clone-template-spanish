import { useWixClient } from "../wix/useWixClient";
import Cookies from "js-cookie";

export const useLogout = () => {
  const wixClient = useWixClient();

  const logout = async () => {
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    return logoutUrl
  };


  return { logout };
};
