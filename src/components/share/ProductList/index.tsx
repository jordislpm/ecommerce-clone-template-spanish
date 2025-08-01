import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";
import { exampleProducts } from '../../../contants/temporaryData';
import { ProductItem } from '../../../types';
import ProductCard from '../ProductCard';
import { getServerProducts } from '../../../hooks/server/products/getServerGetProducts';
import Pagination from '../Pagination';



interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}


async function ProductList({ categoryId, limit, searchParams }: ProductListProps) {

  const {products, pagination} = await getServerProducts(categoryId, limit, searchParams);

 return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product: ProductItem) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {products.length <= 0 &&
        <div className='flex justify-center items-center w-full'>
          <p className="text-secundary text-center mt-4">
            No se encontraron productos en esta colección
          </p>
        </div>
      }
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={pagination.currentPage || 0}
          hasPrev={pagination.hasPrev}
          hasNext={pagination.hasNext}
        />
      ) : null}
    </div>
  );
};

export default ProductList