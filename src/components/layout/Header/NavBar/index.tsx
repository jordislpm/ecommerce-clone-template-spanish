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
            <OnlyForLoadData collections={collections}/>
            {/* Mobile */}
            <div className='flex h-full items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>
                        <Image className='w-180 lg:w-250 xl:w-450 h-auto' src="/oliStore.png" priority alt='logo' width={180} height={50} />
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Bigger screen */}
            <div className='hidden md:flex items-center justify-center gap-8 h-full w-full'>
                {/* Left */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href="/">
                        <div className='text-2xl tracking-wide'>
                            <Image className='w-180 lg:w-250 xl:w-450' src="/oliStore.png" alt='logo' width={180} height={50} />
                        </div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                            href="/"
                        >Home
                        </Link>
                        <Link
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                            href="/list"
                        >Shop
                        </Link>
                        <Link
                            href="/list?discount=true"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >Deals
                        </Link>
                        <Link
                            href="/about"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >About
                        </Link>
                        <Link
                            href="/contact"
                            className='hover-underline-main text-md text-secundary hover-scale-link'
                        >Contact
                        </Link>
                    </div>
                </div>
                {/* Right */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default NavBar