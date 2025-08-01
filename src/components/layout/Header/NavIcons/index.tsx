"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModal from '../../../share/CartModal';
import { useIsLoggedIn } from '../../../../hooks/client/auth/useIsLoggedIn';
import { useLogout } from '../../../../hooks/client/auth/useLogout';
import useAuthStore from '../../../../hooks/client/global/useAuthStore';
import useCartStore from '../../../../hooks/client/cart/useCartStore';
import { useModalOptions } from '../../../../hooks/client/global/useModalOptions';

function NavIcons() {
    // const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    // const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const {isCartOpen, isProfileOpen, setIsCartOpen, setIsProfileOpen}=useModalOptions()

    const { logout } = useLogout();
    const { isLoggedIn, loading, setIsLoggedIn, setLoading } = useAuthStore();
    const router = useRouter();
    const {  counter} = useCartStore();

    const handleProfle = () => {
        if (loading) return; 

        if (!isLoggedIn) {
            router.push("/login");  
        } else {
          setIsProfileOpen() 
        }
    };

    // Handle cart toggle
    const handleCart = () => {
       setIsCartOpen();
    };

    // Handle logout
    const handleLogout = async () => {
        setIsLoading(true);

        const logoutUrl = await logout();

        // Reset global auth state
        setIsLoggedIn(false)
        setLoading(false)
        setIsLoading(false);
        setIsProfileOpen();
        router.push(logoutUrl);
    };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image
                src="/profile.png"
                alt="profile"
                height={22} width={22}
                className="cursor-pointer"
                onClick={handleProfle}  // Open profile modal or redirect
            />
            {isProfileOpen && (
                <div className="absolute p-4 top-12 rounded-md left-0 shadow-modal z-20 bg-white">
                    <Link className="hover-underline-main" href="/profile">Profile</Link>
                    <div
                        className="mt-2 cursor-pointer hover-underline-main"
                        onClick={handleLogout}
                    >
                        Logout
                    </div>
                </div>
            )}
            <Image
                src="/notification.png"
                alt="notifications"
                height={22}
                width={22}
                className="cursor-pointer"
            />
            <div className="relative cursor-pointer">
                <Image
                    src="/cart.png"
                    alt="cart"
                    height={22}
                    width={22}
                    onClick={handleCart}  // Toggle cart modal
                />{
                    counter > 0 && 
                      <div className="absolute -top-4 -right-4 w-6 h-6 bg-secundary rounded-full text-white text-sm flex items-center justify-center">
                    {counter}
                </div>
                }
              
            </div>
            {isCartOpen && <CartModal />}
        </div>
    );
}

export default NavIcons;