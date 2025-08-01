import { create } from 'zustand';
import { AuthState } from '../../types';

export const authStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  loading: true,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  setLoading: (value) => set({ loading: value }),
}));