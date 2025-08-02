"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import useCartStore from '../../../../hooks/client/cart/useCartStore';
import { useIsLoggedIn } from '../../../../hooks/client/auth/useIsLoggedIn';
import { useLogout } from '../../../../hooks/client/auth/useLogout';
import useAuthStore from '../../../../hooks/client/global/useAuthStore';
import { useRouter } from 'next/navigation';


function Menu() {

    const { counter } = useCartStore();
    const { logout } = useLogout();
    const { isLoggedIn, loading, setIsLoggedIn, setLoading } = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
        // setIsLoading(true);

        const logoutUrl = await logout();

        // Reset global auth state
        setIsLoggedIn(false)
        setLoading(false)
        setOpen(false)
        router.push(logoutUrl);
    };

    const [open, setOpen] = useState<boolean>(false)
    return (
        <div>
            <IoMenu
                className="cursor-pointer text-main hover:text-secundary w-10 h-10"
                onClick={() => setOpen(!open)}
            />
            {/* <Image src="/hamburger-menu.svg" width={28} height={28} alt='botón menú' className='cursor-pointer text-orange-500 hover:text-blue-500'
      onClick={() => setOpen(!open)} /> */}
            {open && (
                <div className="absolute bg-main text-secundary left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-20">
                    <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
                    <Link href="/list" onClick={() => setOpen(false)}>Tienda</Link>
                    <Link href="/list?discount=true" onClick={() => setOpen(false)}>Ofertas</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>Nosotros</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>
                    {isLoggedIn ? (
                        <div onClick={handleLogout} className="cursor-pointer">Cerrar sesión</div>
                    ) : (
                        <Link href="/login" onClick={() => setOpen(false)}>Iniciar sesión</Link>
                    )}
                    <Link href="/cart" onClick={() => setOpen(false)}>Carrito ({counter})</Link>
                </div>
            )}
        </div>
    )
}

export default Menu