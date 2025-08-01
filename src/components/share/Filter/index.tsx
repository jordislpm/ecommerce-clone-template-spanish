"use client";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import useCollectionsStore from '../../../hooks/client/global/useCollectionsStore';

function Filter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();


  const { collections } = useCollectionsStore();
   const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
     const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);

   
  };

   useEffect(()=>{
    console.log(searchParams)
   },[searchParams])

  return (
    <div className="mt-12 flex justify-between flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex gap-6 flex-wrap">
        {/* <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select> */}
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
          onChange={handleFilterChange}
        >
          {/* <option>Collection</option> */}
          {collections?.map((collection) => (
            <option key={collection._id} value={collection.slug}>{collection.name}</option>
          ))}
          {/* <option value="">New Arrival</option>
          <option value="">Popular</option> */}
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-main"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-main"
          onChange={handleFilterChange}
        />
        <select
          name="discount"
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
          onChange={handleFilterChange}
        >
          <option value="">All Products</option>
          <option value="true">Only Discounts</option>
        </select>
        {/* <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
          onChange={handleFilterChange}
        >
          <option>Size</option>
          <option value="physical"> 0–3 months</option>
          <option value="digital">3–12 months</option>
          <option value="digital">1–3 years</option>
          <option value="digital">3–6 years</option>
          <option value="digital">6–9 years</option>
          <option value="digital">9–12 years</option>
          <option value="digital">12+ years</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
          onChange={handleFilterChange}
        >
          <option>Color</option>
          <option value="">Test</option>
        </select> */}
        {/* TODO: Filter Categories */}
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium  bg-main"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-main"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};


export default Filter