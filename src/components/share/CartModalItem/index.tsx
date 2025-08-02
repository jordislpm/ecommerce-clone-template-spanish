'use client'
import Image from 'next/image'
import React from 'react'
import { CartItem } from '../../../types'
import useCartStore from '../../../hooks/client/cart/useCartStore';
import { formatPrice } from '../../../lib/format/formatPrice';


interface CartModalItemProps {
    item: CartItem;
}

function CartModalItem({ item }: CartModalItemProps) {

    const { removeItem } = useCartStore();

    return (
        <div className='flex gap-4'>
            <Image
                src={item.image}
                alt=""
                width={72}
                height={96}
                className='object-cover rounded-md'
            />
            <div className='flex flex-col justify-between w-full gap-2'>
                {/* PARTE SUPERIOR */}
                <div className='gap-1'>
                    {/* TÍTULO */}
                    <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <div className='p-1 bg-secundary_second rounded-sm'>{formatPrice(item.price)}</div>
                    </div>
                    {/* DESCRIPCIÓN */}
                    <div className='text-sm flex text-gray-500 h-full w-full justify-between'>
                        {item.availability?.status.toLocaleLowerCase()}
                        {item.descriptionLines.length > 0 &&
                            <span>{item.descriptionLines[0]?.colorInfo?.original}/{item.descriptionLines[1]?.colorInfo?.original}</span>
                        }
                    </div>
                </div>
                {/* PARTE INFERIOR */}
                <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Cantidad: {item.quantity}</span>
                    <span
                        onClick={() => removeItem(item.id)}
                        className='text-main_second cursor-pointer hover:text-secundary'
                    >
                        Eliminar
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartModalItem