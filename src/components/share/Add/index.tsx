'use client'
import React, { useEffect, useState } from 'react'
import useCartStore from '../../../hooks/client/cart/useCartStore';
import useSelecVariantStore from '../../../hooks/client/global/useSelecVariantStore';



interface AddProps {
    productId: string;
    stockNumber: number;
}

function Add({ productId, stockNumber }: AddProps) {

    const { selectedVariant, setSelectedVariant } = useSelecVariantStore()
    const [quantity, setQuantity] = useState(1);
    const [variantId, setVariantId] = useState<string>("00000000-0000-0000-0000-000000000000");


    useEffect(() => {

        if (selectedVariant) {
            setVariantId(selectedVariant?._id)
        }


    }, [selectedVariant])



    const { addItem, isLoading } = useCartStore()

    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }
    };



    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Elija una cantidad</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            onClick={() => handleQuantity("d")}
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        {quantity}
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            onClick={() => handleQuantity("i")}
                            disabled={quantity === stockNumber}
                        >
                            +
                        </button>
                    </div>
                    {stockNumber < 1 ? (
                        <div className="text-xs">El producto está agotado</div>
                    ) : (
                        <div className="text-xs">
                            Solo {` ${stockNumber === 1 ? "queda" : "quedan"}`} <span className="text-orange-500">{`${stockNumber} ${stockNumber === 1 ? "unidad" : "unidades"}`}</span>{" "}
                            <br /> Aprovecha ahora!
                        </div>
                    )}
                </div>
                <button
                    onClick={() => addItem(productId, variantId, quantity)}
                    disabled={
                       false}
                    className="w-36 text-sm rounded-3xl ring-1 ring-secundary  bg-secundary text-white py-2 px-4 hover:bg-white hover:text-secundary disabled:cursor-not-allowed disabled:bg-secundary disabled:opacity-50 disabled:ring-0 disabled:text-white disabled:ring-none"
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default Add