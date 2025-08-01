import { ModalState } from "../../types";
import { create } from "zustand";

export const modalOptions = create<ModalState>()((set) => ({
  isCartOpen: false,
  isProfileOpen: false,
  setIsCartOpen: () => {
    set((state) => ({
      isProfileOpen: false,
      isCartOpen: !state.isCartOpen,
    }));
  },
  setIsProfileOpen: () => {
    set((state) => ({
      isCartOpen: false,
      isProfileOpen: !state.isProfileOpen,
    }));
  },
}));
