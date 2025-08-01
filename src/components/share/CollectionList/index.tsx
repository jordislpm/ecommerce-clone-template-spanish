"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { kidsClothingCategories } from '../../../contants/temporaryData';
import CollectionCard from '../CollectionCard';
import { CollectionItem } from '../../../types';
import { getServerCollections } from '../../../hooks/server/collections/getServerCollections';
import useCollectionsStore from '../../../hooks/client/global/useCollectionsStore';

interface CollectionListProps {
collections: CollectionItem[];
}


function CollectionList() {

    const [current, setCurrent] = useState(0);

    const {collections} = useCollectionsStore();



    const scrollRef = useRef<HTMLDivElement>(null)
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = window.innerWidth < 768 ? 200 : 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            })
        }
    }

    const checkPosition = () => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollLeft, scrollWidth, clientWidth } = el;

        const isAtStart = scrollLeft <= 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

//         if(isAtEnd){
//    setAtEnd(isAtEnd);
//         }

        setAtStart(isAtStart);
        setAtEnd(isAtEnd);
    };

useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkPosition);

    const timeout = setTimeout(() => {
        checkPosition(); 
    }, 100);

    return () => {
        el.removeEventListener("scroll", checkPosition);
        clearTimeout(timeout);
    };
}, []);

    return (
        <div className="relative px-4">


            <div
                className="px-4 overflow-x-auto scrollbar-hide scroll-smooth"
                ref={scrollRef}
                style={{ transform: `translateX(-${current * 100}px)` }}>
                <div className="flex gap-4 md:gap-8">
                    {collections?.map((item) => (
                        <CollectionCard
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            {/*RIGT BUTTON */}
            {!atEnd && <div
                onClick={() => scroll('right')}
                className='hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secundary hover:bg-main p-2 rounded-full shadow '>
                <Image src='/next.png' alt='' height={45} width={45} />
            </div>}
            {/*LEFT BUTTON */}
            {!atStart && <div
                onClick={() => scroll('left')}
                className='hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secundary hover:bg-main p-2 rounded-full shadow rotate-180'>
                <Image src='/next.png' alt='' height={45} width={45} />
            </div>}
        </div>
    );
};

export default CollectionList;