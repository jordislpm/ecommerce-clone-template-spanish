import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LoginState } from "@wix/sdk";
import { MODE } from "../../../enums/auth-mode.enum";
import { useWixClient } from "../wix/useWixClient";
import { authStore } from "../../../global/auth/authStore";
import { cartStore } from "../../../services/wixClient/cart/cartStore";

export function useAuth() {
  const wixClient = useWixClient();
  const router = useRouter();

  const setIsLoggedIn = authStore((state) => state.setIsLoggedIn);
  const getCart = cartStore((state) => state.getCart);

  const [mode, setMode] = useState<MODE>(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (wixClient && wixClient.auth.loggedIn()) {
      router.push("/");
    }
  }, [wixClient, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({ email, password });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setMessage("Password reset email sent. Please check your e-mail.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
      }

      if (!response) {
        setError("No response from server.");
        setIsLoading(false);
        return;
      }

      switch (response.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken!
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          setIsLoggedIn(true);
          getCart()
          router.push("/");
          break;

        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong!");
          }
          break;

        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
          break;

        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
          break;
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mode,
    setMode,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    emailCode,
    setEmailCode,
    isLoading,
    error,
    message,
    handleSubmit,
    formTitle:
      mode === MODE.LOGIN
        ? "Log in"
        : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
        ? "Reset Your Password"
        : "Verify Your Email",
    buttonTitle:
      mode === MODE.LOGIN
        ? "Login"
        : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
        ? "Reset"
        : "Verify",
  };
}
