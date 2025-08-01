import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SelectVariantGlobalType } from "../../types";

export const selecVariantStore = create<SelectVariantGlobalType>()(
  persist(
    (set) => ({
      selectedVariant: undefined,
      setSelectedVariant: (newVariant) => {
        set(() => ({
          selectedVariant: newVariant,
        }));
        return;
      },
    }),
    {
      name: "variant-selected",
    }
  )
);
