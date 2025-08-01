import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { myStoreInfo } from '../../../contants/general';
import { socialIcons } from '../../../contants/socialMedia';


function Footer() {
  return (
    <footer className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-main text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className='text-2xl tracking-wide'>
              <Image className='w-180 lg:w-250 xl:w-450 h-auto' src="/oliStore.png" alt='logo' width={180} height={50} />
            </div>
          </Link>
          <p>
            {myStoreInfo.address}
          </p>
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
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/about">About Us</Link>
              <Link className='hover-underline-secundary' href="/list?discount=true">Deals</Link>
              <Link className='hover-underline-secundary' href="/affiliates">Affiliates</Link>
              <Link className='hover-underline-secundary' href="/blog">Blog</Link>
              <Link className='hover-underline-secundary' href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/list?cat=all-products&sort=asc+lastUpdated">New Arrivals</Link>
              <Link className='hover-underline-secundary' href="/list?cat=accessories">Accessories</Link>
              <Link className='hover-underline-secundary' href="/list?cat=pants-jeans">Pants</Link>
              <Link className='hover-underline-secundary' href="/list?cat=t-shirts">T-shirts</Link>
              <Link className='hover-underline-secundary' href="/list?cat=all-products">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link className='hover-underline-secundary' href="/customer-service">Customer Service</Link>
              <Link className='hover-underline-secundary' href="/profile">My Account</Link>
              <Link className='hover-underline-secundary' href="/find-store">Find a Store</Link>
              <Link className='hover-underline-secundary' href="/legal">Legal & Privacy</Link>
              <Link className='hover-underline-secundary' href="/gift-card">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <a href='https://www.jordisdev.com' target="_blank" className="cursor:pointer">© 2025 jordisdev.com</a>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer