import { CollectionStoreType } from './../../types/index';
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SelectVariantGlobalType } from "../../types";

export const collectionsStore = create<CollectionStoreType>()(
    (set) => ({
      collections: null,
      setCollections: (newCollection) => {
        set(() => ({
          collections: newCollection,
        }));
        return;
      },
    }),
);
