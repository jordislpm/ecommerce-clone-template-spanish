import { modalOptions } from "../../../global/modal/modalButtons"


export const useModalOptions = () => {
    const isCartOpen = modalOptions((state) => state.isCartOpen);
    const isProfileOpen = modalOptions((state) => state.isProfileOpen);
    const setIsProfileOpen = modalOptions((state) => state.setIsProfileOpen);
    const setIsCartOpen = modalOptions((state) => state.setIsCartOpen);



    return {
        isCartOpen,
        isProfileOpen,
        setIsCartOpen,
        setIsProfileOpen
    }
}