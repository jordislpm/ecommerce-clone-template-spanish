import { authStore } from "./../../../global/auth/authStore";

const useAuthStore = () => {
  const isLoggedIn = authStore((state) => state.isLoggedIn);
  const loading = authStore((state) => state.loading);
  const setIsLoggedIn = authStore((state) => state.setIsLoggedIn);
  const setLoading = authStore((state) => state.setLoading);

  return {
    isLoggedIn,
    loading,
    setIsLoggedIn,
    setLoading,
  };
};

export default useAuthStore;
