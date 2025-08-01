import { useWixClient } from "../wix/useWixClient";

export function useLogin() {
  const wixClient = useWixClient();

  const login = async () => {
    const loginRequestData = wixClient.auth.generateOAuthData(
      "http://localhost:3000"
    );

    console.log(loginRequestData);

    localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
    const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
    window.location.href = authUrl;
  };

  return {
    login
  }
}
