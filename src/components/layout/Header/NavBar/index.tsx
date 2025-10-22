import Link from 'next/link'
import React, { useEffect } from 'react'
import Menu from '../Menu'
import Image from 'next/image'
import SearchBar from '../../../share/SearchBar'
import NavIcons from '../NavIcons'

import { collectionsStore } from '../../../../global/collections/collectionsStore'
import useCollectionsStore from '../../../../hooks/client/global/useCollectionsStore'
import { useGetCollections } from '../../../../hooks/client/collections/useGetCollections'
import { getServerCollections } from '../../../../hooks/server/collections/getServerCollections'
import OnlyForLoadData from '../../../share/OnlyForLoadData/OnlyForLoadData'

async function NavBar() {

    const collections = await getServerCollections();

    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative w-full'>
            <OnlyForLoadData collections={collections} />
            {/* Móvil */}
            <div className='flex h-full items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>
                        <Image
                            className='w-180 lg:w-250 xl:w-450 h-auto'
                            src="/oliStore.png"
                            priority
                            alt='logo'
                            width={180}
                            height={50}
                        />
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Pantallas grandes */}
            <div className='hidden md:flex items-center justify-center gap-8 h-full w-full'>
                {/* Izquierda */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-3'>
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                src="/oliStore.png"
                                alt="logo"
                                width={180}
                                height={80}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                            href="/"
                        >
                            Inicio
                        </Link>
                        <Link
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                            href="/list"
                        >
                            Tienda
                        </Link>
                        <Link
                            href="/list?discount=true"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >
                            Ofertas
                        </Link>
                        <Link
                            href="/about"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contact"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
                {/* Derecha */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>

    )
}

export default NavBar