'use client '
import React, { useEffect } from 'react'
import CartModalItem from '../CartModalItem';
import ButtonRect from '../ButtonRect';
import useCartStore from '../../../hooks/client/cart/useCartStore';
import { useClientHandleCheckout } from '../../../hooks/client/checkout/useClientHandleCheckout';
import { useModalOptions } from '../../../hooks/client/global/useModalOptions';
import { useRouter } from 'next/navigation';

function CartModal() {

  const router = useRouter();

  const { cart, isLoading, removeItem } = useCartStore();
  const {handleCheckout}=useClientHandleCheckout()
  const {setIsCartOpen}=useModalOptions();


  const actionHandleCheckout = ()=>{
    setIsCartOpen()
    handleCheckout()
  }

  const handleViewCart = ()=>{
    setIsCartOpen()
    router.push("/cart")
  }



  // useEffect(()=>{
  //   console.log("cart in modal", cart?.lineItems)
  // },[cart])

  //   useEffect(()=>{

  //     const getCartInComponent = async()=>{
  //     const cart = await getCart()

  //     console.log(cart)

  //     }

  // getCartInComponent()

  //   },[getCart])

  return (
    <div className='z-20 absolute p-4 rounded-md shadow-modal bg-white top-12 right-0 flex flex-col gap-6 w-max'>
      <h2 className='text-xl'>Shopping Cart</h2>
      {cart?.lineItems.length === 0 ?
        (
          <div>
            Cart is empty
          </div>
        ) : (
          <div className='w-max flex flex-col gap-8'>
            {cart?.lineItems.map((item, index) => (
                <CartModalItem 
                item={item} 
                key={`${item.id}:${index}`}/>
            ))}
            {/* BOTTOM */}
            <div className=''>
              <div className='flex items-center justify-between font-semibold'>
                <span className=''>Subtotal</span>
                <span className='font-semibold bg-main p-1 rounded-sm'>${cart?.subtotal.amount}</span>
              </div>
              <p className='text-white text-sm mt-2 mb-4 bg-main_second p-1'>
                Shipping and taxes calculated at checkout.
              </p>
              <div className='flex justify-between'>
                <ButtonRect text='View Cart' buttonAction={handleViewCart} />
                <ButtonRect text='Checkout' type='black' buttonAction={actionHandleCheckout} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default CartModal