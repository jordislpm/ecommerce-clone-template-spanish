'use client'
import React, { useEffect, useState } from 'react'
import { ProductItem, ProductOptionProductItem, VariantProductItem } from '../../../types';
import Add from '../Add';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import useSelecVariantStore from '../../../hooks/client/global/useSelecVariantStore';



interface CustomizeProductsProps {
    productId: string;
    variants: VariantProductItem[];
    productOptions: ProductOptionProductItem[];
}

function CustomizeProducts({ productId, variants, productOptions }: CustomizeProductsProps) {

    const { selectedVariant, setSelectedVariant } = useSelecVariantStore()
    const searchParams = useSearchParams();
    const router = useRouter();
    // const { replace } = useRouter();

    const [selectedOptions, setSelectedOptions] = useState<{
        [key: string]: string;
    }>({});


    useEffect(() => {
        const variant = variants.find((v) => {
            const variantChoices = v.choices;
            if (!variantChoices) return false;
            return Object.entries(selectedOptions).every(
                ([key, value]) => variantChoices[key] === value
            );
        });
        if (variant) {
            setSelectedVariant(variant);
        }
    }, [selectedOptions, variants, setSelectedVariant]);

    // useEffect(() => {
    //     if (selectedVariant) {
    //        const params = new URLSearchParams(searchParams.toString());

    // if (params.get("variant") === selectedVariant._id) {
    //   // If already selected → remove it
    //   params.delete("variant");
    // } else {
    //   // Otherwise → set/update it
    //   params.set("variant", selectedVariant._id);
    // }

    // router.push(`?${params.toString()}`);
    //     }
    // }, [selectedVariant, router, searchParams])

    // useEffect(() => {
    //     if (!selectedVariant) return;

    //     const params = new URLSearchParams(searchParams.toString());
    //     const currentVariant = params.get("variant");

    //     // ❌ Avoid update if nothing changed
    //     if (currentVariant === selectedVariant._id) return;

    //     if (params.get("variant") === selectedVariant._id) {
    //         // If already selected → remove it
    //         params.delete("variant");
    //     } else {
    //         // Otherwise → set/update it
    //         params.set("variant", selectedVariant._id);
    //     }

    //     router.push(`?${params.toString()}`);

    // }, [selectedVariant]);

    const handleOptionSelect = (optionType: string, choice: string) => {

        //selectedOptions[optionType] === choice
        setSelectedOptions((prev) => {
            if (prev[optionType] === choice) {
                const updated = { ...prev };
                delete updated[optionType];
                return updated;
            }
            return { ...prev, [optionType]: choice }
        }
        );
    };

    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false;

            return (
                Object.entries(choices).every(
                    ([key, value]) => variantChoices[key] === value
                ) &&
                variant.stock?.inStock &&
                variant.stock?.quantity &&
                variant.stock?.quantity > 0
            );
        });
    };

    return (
        <div className="flex flex-col gap-6">
            {productOptions.map((option) => (
                <div className="flex flex-col gap-4" key={option.name}>
                    <h4 className="font-medium">Choose a {option.name}</h4>
                    <ul className="flex items-center gap-3">
                        {option.choices?.map((choice) => {
                            const disabled = !isVariantInStock({
                                ...selectedOptions,
                                [option.name!]: choice.description!,
                            });

                            const selected =
                                selectedOptions[option.name!] === choice.description;

                            const clickHandler = disabled
                                ? undefined
                                : () => handleOptionSelect(option.name!, choice.description!);

                            return option.name === "Color" ? (
                                <li
                                    className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                                    style={{
                                        backgroundColor: choice.value,
                                        cursor: disabled ? "not-allowed" : "pointer",
                                    }}
                                    onClick={clickHandler}
                                    key={choice.description}
                                >
                                    {selected && (
                                        <div className="absolute w-10 h-10 rounded-full ring-2 ring-main top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    )}
                                    {disabled && (
                                        <div className="absolute w-10 h-[2px] bg-secundary_second rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    )}
                                </li>
                            ) : (
                                <li
                                    className="ring-1 ring-lama text-main rounded-md py-1 px-4 text-sm"
                                    style={{
                                        cursor: disabled ? "not-allowed" : "pointer",
                                        backgroundColor: selected
                                            ? "#9BD4E4"
                                            : disabled
                                                ? "#E4B29B"
                                                : "white",
                                        color: selected || disabled ? "white" : "#9BD4E4",
                                        boxShadow: disabled ? "none" : "",

                                    }}
                                    key={choice.description}
                                    onClick={clickHandler}
                                >
                                    {choice.description}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
            <Add
                productId={productId}
                stockNumber={selectedVariant?.stock?.quantity || 0}
            />
            {/* COLOR */}
            {/*             
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}
            {/* OTHERS */}
            {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-main text-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-lama text-white bg-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-secundary text-white bg-secundary rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
        </div>
    );
};

export default CustomizeProducts