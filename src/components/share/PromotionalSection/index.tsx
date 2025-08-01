"use client"
import React from 'react'
import ButtonRound from '../ButtonRound'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function PromotionalSection() {
  const router = useRouter();
  return (
    <div className="hidden bg-secundary px-4 sm:flex justify-between h-64">
      <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold leading-[48px] text-main_second">
          Aprovecha hasta un 50% de descuento en
          <br /> productos seleccionados
        </h1>
        <ButtonRound type='second' text='Compra Ahora!' buttonAction={() => router.push("/list?discount=true")} />
        {/* <button className="rounded-3xl bg-main text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button> */}
      </div>
      <div className="relative w-1/3">
        <Image src="/happy_boy.png" alt="" fill className="object-contain" />
      </div>
    </div>
  )
}

export default PromotionalSection