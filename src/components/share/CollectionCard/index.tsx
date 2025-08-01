import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CollectionItem } from '../../../types'


interface CategoryCardProps {
    item: CollectionItem
}

function CollectionCard({ item }: CategoryCardProps) {

    return (
        <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-[90%] sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
        >
            <div className="relative bg-slate-100 w-full h-96">
                <Image
                    src={item.media?.mainMedia?.image?.url || "cat.png"}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
                {item.name}
            </h1>
        </Link>
    )
}

export default CollectionCard