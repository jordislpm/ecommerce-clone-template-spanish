import CollectionList from "../components/share/CollectionList";
import ProductList from "../components/share/ProductList"
import Skeleton from "../components/Skeleton";
import Slider from "../components/share/Slider"
import { getServerCollections } from "../hooks/server/collections/getServerCollections";

import React, { Suspense } from 'react'

async function HomePage() {

  const collections = await getServerCollections()

  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-8">
        <h1 className="text-2xl">Lo último en la tienda</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId="00000000-000000-000000-000000000001"
            limit={8}
            searchParams={{
              sort: "asc lastUpdated",
            }}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Colecciones
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CollectionList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Conjuntos a Juego</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId="d8146dfd-440d-418d-0864-daf7b51c46d3" />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage