import React from 'react'
import { singleProduct } from '../../contants/temporaryData';
import ProductImages from '../../components/share/ProductImages';
import { capitalizeText } from '../../lib/format/formatText';
import CustomizeProducts from '../../components/share/CustomizeProducts';
import Add from '../../components/share/Add';
import { getServerProduct } from '../../hooks/server/products/getServerGetProduct';
import DOMPurify from "isomorphic-dompurify";
import SinglePrice from '../../components/share/SinglePrice';
import useSelecVariantStore from '../../hooks/client/global/useSelecVariantStore';


async function SinglePage({ params }: { params: { slug: string } }) {

  

  const product = await getServerProduct(params.slug)
  
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <div
          className="text-m text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
          }}
        ></div>
        {/* <p className="text-gray-500">{product.description}</p> */}
        <div className="h-[2px] bg-main" />

        <SinglePrice product={product}/>
        {/* {!product.price?.discountedPrice || product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )} */}
        <div className="h-[2px] bg-main" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <>
            <Add
              productId={product._id!}
              stockNumber={product.stock?.quantity || 0}
            />
          </>
        )}
        <div className="h-[2px] bg-main" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="mb-4 text-secundary font-semibold">{capitalizeText(section.title)}</h4>
            <p>{section.description}</p>
          </div>
        ))}
        {product.additionalInfoSections?.length === undefined && <div className="h-[2px] bg-main" />}
        {/* REVIEWS */}
        {/* <h1 className="text-2xl">Reseñas de usuarios</h1> */}
        {/* <Reviews productId={product._id!} /> */}
      </div>
    </div>
  );
};

export default SinglePage