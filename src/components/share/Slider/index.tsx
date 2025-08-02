'use client';
import React, { useState, useRef, useEffect } from 'react';
import { slidesData } from '../../../contants/general';
import Link from 'next/link';
import ButtonRect from '../ButtonRect';
import Image from 'next/image';

function Slider() {
    const [current, setCurrent] = useState<number>(0);
    
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (
            touchStartX.current !== null &&
            touchEndX.current !== null
        ) {
            const distance = touchStartX.current - touchEndX.current;
            const threshold = 50;

            if (distance > threshold) {
                setCurrent((prev) => (prev === slidesData.length - 1 ? 0: prev + 1));
            } else if (distance < -threshold) {
                setCurrent((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };




    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1))
        }, 5000)


        return () => clearInterval(interval)
    }, [current])
    return (
        <div
            className="h-[calc(100vh-80px)] overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slidesData.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 text-center p-4">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <Link href={slide.url}>
                                <ButtonRect
                                    text="VER MAS"
                                    buttonAction={() => { }}
                                    type="black"
                                />
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 relative xl:h-full">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                sizes="100%"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* NAVIGATION DOTS */}
            <div className="absolute m-auto left-1/2 -translate-x-1/2 bottom-8 flex gap-4">
                {slidesData.map((slide, index) => (
                    <div
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ring-1 ring-secundary cursor-pointer flex items-center justify-center ${current === index ? 'scale-150' : ''}`}
                        key={slide.id}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] rounded-full bg-main" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;