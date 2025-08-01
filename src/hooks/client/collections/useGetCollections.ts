// src/hooks/client/useClientGetProducts.ts
import { useState } from "react";
import { CollectionItem } from "../../../types";
import { formatProductResponse } from "../../../lib/format/formatProductResponse";
import { getWixCollections } from "../../../services/wixClient/collections/getWixCollections";
import { formatCollectionResponse } from "../../../lib/format/formatCollectionResponse";
import { collectionsStore } from "../../../global/collections/collectionsStore";

import { wixClientServer } from "../../../lib/wixClients/wixClient";

export function useGetCollections() {
  const [collections, setCollections] = useState<CollectionItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setCollectionStore = collectionsStore((state) => state.setCollections);

  const getCollections = async () => {
    setLoading(true);
    setError(null);
    try {
      const wixClient = await wixClientServer();
      const response = await wixClient.collections.queryCollections().find();

      console.log(response)
      const collections = response.items.map(formatCollectionResponse);
      setCollections(collections);
      setCollectionStore(collections);
    } catch (e: any) {
      setError(e.message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { getCollections, collections, loading, error };
}
