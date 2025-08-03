'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";
import { ProductItem } from '../../../types';
import ButtonRound from '../ButtonRound';
import { formatPrice } from '../../../lib/format/formatPrice';

interface ProductCardProps {
    product: ProductItem
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={"/" + product._id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
        >
            <div className="relative w-full h-80">
                <Image
                    src={product.media?.mainMedia?.image?.url || "/product.png"}
                    alt={product.name || "producto"}
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                />
                {product.media?.items && (
                    <Image
                        src={product.media?.items[1]?.image?.url || "/product.png"}
                        alt={product.name || "producto"}
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                )}
            </div>
            <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">{formatPrice(product.price?.price) }</span>
            </div>
            {product.additionalInfoSections && (
                <div
                    className="text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            product.additionalInfoSections.find(
                                (section: any) => section.title === "shortDesc"
                            )?.description || ""
                        ),
                    }}
                ></div>
            )}
            <ButtonRound text="Ver producto" buttonAction={() => { }} />
        </Link>
    )
}

export default ProductCard