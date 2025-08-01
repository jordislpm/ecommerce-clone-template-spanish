import { selecVariantStore } from "../../../global/products/selecVariantStore";


const useSelecVariantStore = () => {
  const selectedVariant = selecVariantStore((state) => state.selectedVariant);
  const setSelectedVariant = selecVariantStore((state) => state.setSelectedVariant);

  return {
    selectedVariant,
    setSelectedVariant,
  };
};

export default useSelecVariantStore;