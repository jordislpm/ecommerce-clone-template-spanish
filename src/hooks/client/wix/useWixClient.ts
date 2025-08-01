"use client";

import { useEffect, useState } from "react";
import { wixClientServer } from "../../../lib/wixClients/wixClient";


export function useWixClient() {
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      const wixClient = await wixClientServer(); // ✅ awaited correctly
      setClient(wixClient);
    };

    init();
  }, []);

  if (client)

  return client;
}