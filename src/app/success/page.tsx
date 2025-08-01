"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { MyStoreInfoType } from "../../types";
import { myStoreInfo } from "../../contants/general";



function SuccessPage() {

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize(); // set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const searchParams = useSearchParams();
    const router = useRouter();

    // const orderId = searchParams.get("orderId");

    // useEffect(() => {
    //     if (!orderId) return;

    //     const timer = setTimeout(() => {
    //         router.push("/orders/" + orderId);
    //     }, 5000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [orderId, router]);



    return (
        <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)] overflow-hidden">
            <Confetti width={dimensions.width} height={dimensions.height} />
            <h1 className="text-6xl text-green-700">¡Éxito!</h1>
            <div className="flex justify-center items-center p-2 text-center">
                {myStoreInfo.plan === "simple-whatsapp" ? (
                    <h2 className="text-xl font-medium">
                        Gracias por tu pedido, por favor completa la compra en WhatsApp
                    </h2>
                ) : (
                    <h2 className="text-xl font-medium">
                        Te enviamos la factura a tu correo electrónico
                    </h2>
                )}
            </div>
            {myStoreInfo.plan !== "simple-whatsapp" && (
                <h3 className="">Estás siendo redirigido a la página del pedido...</h3>
            )}
        </div>

    );
};

export default SuccessPage;