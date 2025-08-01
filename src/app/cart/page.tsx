'use client';

import React from 'react';
import useCartStore from '../../hooks/client/cart/useCartStore';
import CartModalItem from '../../components/share/CartModalItem';
import Link from 'next/link';
import ButtonRect from '../../components/share/ButtonRect';
import Image from 'next/image';
import { useClientHandleCheckout } from '../../hooks/client/checkout/useClientHandleCheckout';


const CartPage = () => {
    const { cart, removeItem } = useCartStore()
    const { handleCheckout } = useClientHandleCheckout()

    const hasItems = cart?.lineItems.length === 0;

    if (hasItems) {
        return (
            <div className="p-6 max-w-2xl mx-auto text-center">
                <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
                <Link href="/">
                    <span className="text-main_second underline">Go back to shop</span>
                </Link>
            </div>
        )
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

            {/* CART ITEMS */}
            <div className="flex flex-col gap-6">
                {cart?.lineItems.map((item, index) => (
                    <div key={`${item.id}:${index}`} className="flex gap-4 border-b pb-4">
                        <Image
                            src={item.image}
                            alt={item.name || 'Product'}
                            width={100}
                            height={120}
                            className="object-cover rounded-md"
                        />
                        <div className="flex justify-between w-full">
                            <div className='flex flex-col w-2/3 justify-between'>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-gray-500 text-sm">
                                    {item.availability?.status?.toLowerCase()}
                                </p>
                                {item.descriptionLines.length > 0 &&
                                    <span className='text-gray-500 text-sm'>{item.descriptionLines[0]?.colorInfo?.original}/{item.descriptionLines[1]?.colorInfo?.original}</span>

                                }
                                <p className="text- text-gray-800">Qty: {item.quantity}</p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                                <span className="font-semibold bg-secundary_second p-1 rounded-sm">${item.price}</span>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-main_second text-sm hover:text-secundary"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SUMMARY */}
            <div className="mt-8 border-t pt-6 flex flex-col gap-4">
                <div className="flex justify-between font-semibold text-lg">
                    <span>Subtotal:</span>
                    <span className='font-semibold bg-main p-1 rounded-sm'>${cart?.subtotal.amount}</span>
                </div>
                <p className="text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between mt-4 gap-4">
                    <Link href="/">
                        <ButtonRect text="Continue Shopping" buttonAction={() => { }} />
                    </Link>
                    <ButtonRect text="Proceed to Checkout" type="black" buttonAction={handleCheckout} />
                </div>
            </div>
        </div>
    )
}

export default CartPage;