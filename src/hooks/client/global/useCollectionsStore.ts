import { collectionsStore } from "../../../global/collections/collectionsStore";



const useCollectionsStore= () => {
  const collections = collectionsStore((state) => state.collections);
  const setCollections = collectionsStore((state) => state.setCollections);

  return {
    collections,
    setCollections,
  };
};

export default useCollectionsStore;