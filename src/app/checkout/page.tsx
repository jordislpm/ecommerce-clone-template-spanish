"use client";
import React, { useState } from "react";
import useCartStore from "../../hooks/client/cart/useCartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "../../lib/format/formatPrice";
import { myStoreInfo } from "../../contants/general";

export default function CheckoutPage() {
  const { counter, cart, isLoading, removeItem, clearCart } = useCartStore();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleWhatsAppOrder = () => {
 if (!name.trim() || !address.trim() || !phoneNumber.trim()) {
    alert("Por favor, completa todos los campos antes de enviar el pedido.");
    return;
  }

  const {phoneWhatsapp}=myStoreInfo;

  //+1 829 268 2437

  // const phoneWhatsapp = "+14168774127";

  let message = `Nuevo pedido:\n\n`;
  message += `Nombre: ${name}\n`;
  message += `Teléfono: ${phoneNumber}\n`;
  message += `Dirección: ${address}\n\n`;
  message += `Artículos solicitados:\n\n`;

  cart?.lineItems.forEach((item, index) => {
    const itemNumber = index + 1;
    const itemName = item.name;
    const quantity = item.quantity;
    const price = item.price;

    let variant: null | string = null;
    if (item.descriptionLines.length > 0) {
      variant = `${item.descriptionLines[0]?.colorInfo?.original}/${item.descriptionLines[1]?.colorInfo?.original}`;
    }

    message += `${itemNumber}. ${itemName}\n`;
    message += `   Cantidad: ${quantity}\n`;
    message += `   Precio: ${price}\n`;
    if (variant) {
      message += `   Variante: ${variant}\n`;
    }
    message += `\n`;
  });

  message += `Total: C$${cart?.subtotal.amount}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneWhatsapp}?text=${encodedMessage}`;

  const confirmed = window.confirm(
    "Estás a punto de abrir WhatsApp para enviar tu pedido., Al continuar, tu carrito será vaciado.\n\n¿Quieres continuar?"
  );

  if (confirmed) {
    window.open(whatsappURL, "_blank");
  router.push("/success")
  clearCart()

    // 💡 Delay cart clearing slightly in case the tab switch fails
    setTimeout(() => {
      //clearCart(); // Replace with your actual cart clearing function
    }, 1000);
  }

};

  if (counter === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-500 mb-6">
          Por favor selecciona algunos productos antes de continuar con el pedido.
        </p>
        <Link
          href="/list"
          className="bg-secundary text-white px-6 py-2 rounded-md hover:bg-main transition"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Finalizar pedido por WhatsApp</h1>

      {/* Resumen del pedido */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
        <div className="space-y-3 text-sm">
          {cart?.lineItems.map((item, i) => (
            <div key={i} className="flex justify-between">
              <div className="flex w-2/3 justify-between">
                <span>{item.quantity}x {item.name}</span>
                {item.descriptionLines.length > 0 && (
                  <span>
                    {item.descriptionLines[0]?.colorInfo?.original}/
                    {item.descriptionLines[1]?.colorInfo?.original}
                  </span>
                )}
              </div>
              <span>
                {item.quantity <= 1
                  ? formatPrice(item.price) 
                  : formatPrice(Math.abs((item.price ? parseInt(item.price) : 0) * item.quantity))}
              </span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatPrice(cart?.subtotal.amount)}</span>
          </div>
        </div>
      </section>

      {/* Datos del cliente */}
      <section className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Tu nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="text"
          placeholder="Dirección de entrega"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="text"
          placeholder="Tu número de teléfono"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border p-3 rounded-md"
        />
      </section>

      <button
        onClick={handleWhatsAppOrder}
        className="flex w-full gap-2 justify-center bg-secundary text-white py-3 rounded-lg hover:bg-main transition"
      >
        <Image
          src="/whatsapp.png"
          alt="whatsapp icon"
          height={22}
          width={22}
          className="cursor-pointer"
        />
        Enviar pedido por WhatsApp
      </button>
    </div>
  );
}
