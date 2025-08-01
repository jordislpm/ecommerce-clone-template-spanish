import Image from 'next/image';
import React, { Suspense } from 'react'
import ProductList from '../../components/share/ProductList';
//
import { products } from "@wix/stores";
import { kidsClothingCategories } from '../../contants/temporaryData';
import ButtonRound from '../../components/share/ButtonRound';
import PromotionalSection from '../../components/share/PromotionalSection';
import Filter from '../../components/share/Filter';
import { getServerCollections } from '../../hooks/server/collections/getServerCollections';
import { getServerColletionBySlug } from '../../hooks/server/collections/getServerColletionBySlug'
import Skeleton from '../../components/Skeleton';

async function ListPage({ searchParams }: { searchParams: any }) {


  const cat = { collection: kidsClothingCategories[0] }

  const collection = await getServerColletionBySlug(searchParams.cat)
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <PromotionalSection />
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{collection?.collection?.name}!</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            collection.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};


export default ListPage