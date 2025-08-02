import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { myStoreInfo } from '../../../contants/general';
import { socialIcons } from '../../../contants/socialMedia';


function Footer() {
  return (
    <footer className="flex flex-col h-full py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-main text-sm mt-24 justify-between">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className='text-2xl tracking-wide'>
              <Image className='w-180 lg:w-250 xl:w-450 h-auto' src="/oliStore.png" alt='logo' width={180} height={50} />
            </div>
          </Link>
          <p>{myStoreInfo.address}</p>
          <span className="font-semibold">{myStoreInfo.email}</span>
          <span className="font-semibold">{myStoreInfo.phone}</span>
          <div className="flex gap-6">
            {socialIcons.map(({ name, icon }) => {
              const url = myStoreInfo.socialMedia[name];
              return url ? (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                  <Image src={icon} alt={`${name} icon`} width={16} height={16} />
                </a>
              ) : null;
            })}
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">EMPRESA</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/about">Sobre Nosotros</Link>
              <Link className='hover-underline-secundary' href="/list?discount=true">Ofertas</Link>
              <Link className='hover-underline-secundary' href="/affiliates">Afiliados</Link>
              <Link className='hover-underline-secundary' href="/blog">Blog</Link>
              <Link className='hover-underline-secundary' href="/contact">Contáctanos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">TIENDA</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/list?cat=all-products&sort=asc+lastUpdated">Últimas novedades</Link>
              <Link className='hover-underline-secundary' href="/list?cat=accessories">Accesorios</Link>
              <Link className='hover-underline-secundary' href="/list?cat=pants-jeans">Pantalones</Link>
              <Link className='hover-underline-secundary' href="/list?cat=t-shirts">Camisetas</Link>
              <Link className='hover-underline-secundary' href="/list?cat=all-products">Todos los productos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">AYUDA</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/customer-service">Servicio al Cliente</Link>
              <Link className='hover-underline-secundary' href="/profile">Mi Cuenta</Link>
              <Link className='hover-underline-secundary' href="/find-store">Buscar Tienda</Link>
              <Link className='hover-underline-secundary' href="/legal">Legal y Privacidad</Link>
              <Link className='hover-underline-secundary' href="/gift-card">Tarjeta de Regalo</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUSCRÍBETE</h1>
          <p>
            Sé el primero en recibir las últimas noticias sobre tendencias, promociones y mucho más.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Correo electrónico"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">UNIRSE</button>
          </div>
          <span className="font-semibold">Pagos Seguros</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="Paypal" width={40} height={20} />
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={20} />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Idioma</span>
            <span className="font-medium">Estados Unidos | Español</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Moneda</span>
            <span className="font-medium">$ RD</span>
          </div>
        </div>
      </div>
       <a href='https://www.jordisdev.com' target="_blank" className="cursor-pointer">© 2025 jordisdev.com</a>
    </footer>
  )
}

export default Footer