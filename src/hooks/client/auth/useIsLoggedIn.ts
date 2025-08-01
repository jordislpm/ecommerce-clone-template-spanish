"use client"
import { useEffect, useState } from "react";
import useAuthStore from "../global/useAuthStore";
import { useWixClient } from "../wix/useWixClient";

export const useIsLoggedIn = () => {
  const wixClient = useWixClient();
  const { setIsLoggedIn, setLoading } = useAuthStore();

  const [isLoggedIn, setLocalLoggedIn] = useState<boolean | null>(null);
  const [loading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!wixClient) {
      setIsLoggedIn(false);
      setLocalLoggedIn(false);
      setLoading(false);
      setLocalLoading(false);
      return;
    }

    const loggedIn = wixClient.auth.loggedIn();

    setIsLoggedIn(loggedIn);
    setLocalLoggedIn(loggedIn);
    setLoading(false);
    setLocalLoading(false);
  }, [wixClient, setIsLoggedIn, setLoading]);

  return {
    loading: loading || isLoggedIn === null,
    isLoggedIn: isLoggedIn ?? false,
  };
};