'use client'

import React, { useEffect } from 'react'
import { ProductItem } from '../../../types'
import useSelecVariantStore from '../../../hooks/client/global/useSelecVariantStore'
import { formatPrice } from '../../../lib/format/formatPrice'

interface SinglePriceProps {
    product: ProductItem
}

function SinglePrice({ product }: SinglePriceProps) {

    const { selectedVariant } = useSelecVariantStore();
    return (
        <>
            {!selectedVariant?.variant?.priceData?.discountedPrice || selectedVariant?.variant?.priceData?.price === selectedVariant?.variant?.priceData?.discountedPrice ? (
                <h2 className="font-medium text-2xl">{formatPrice(selectedVariant?.variant?.priceData?.price)}</h2>
            ) : (
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">
                        {formatPrice(selectedVariant?.variant?.priceData?.price) }
                    </h3>
                    <h2 className="font-medium text-2xl">
                        {formatPrice(selectedVariant?.variant?.priceData?.discountedPrice)}
                    </h2>
                </div>
            )}
        </>
    )
}

export default SinglePrice