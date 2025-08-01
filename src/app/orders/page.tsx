
import Link from "next/link";
import { notFound } from "next/navigation";
import { wixClientServerApi } from "../../lib/wixClients/WixClientServer";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const wixClient = await wixClientServerApi();

  let order;
  try {
    order = await wixClient.orders.getOrder(id);
  } catch (err) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center ">
  <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-40 py-20">
    <h1 className="text-xl">Detalles del pedido</h1>
    <div className="mt-12 flex flex-col gap-6">
      <div>
        <span className="font-medium">ID del pedido: </span>
        <span>{order._id}</span>
      </div>
      <div>
        <span className="font-medium">Nombre del destinatario: </span>
        <span>
          {order.billingInfo?.contactDetails?.firstName + " "}
          {order.billingInfo?.contactDetails?.lastName}
        </span>
      </div>
      <div>
        <span className="font-medium">Correo del destinatario: </span>
        <span>{order.buyerInfo?.email}</span>
      </div>
      <div>
        <span className="font-medium">Precio: </span>
        <span>{order.priceSummary?.subtotal?.amount}</span>
      </div>
      <div>
        <span className="font-medium">Estado del pago: </span>
        <span>{order.paymentStatus}</span>
      </div>
      <div>
        <span className="font-medium">Estado del pedido: </span>
        <span>{order.status}</span>
      </div>
      <div>
        <span className="font-medium">Dirección de entrega: </span>
        <span>
          {order.billingInfo?.address?.addressLine1 + " "}
          {order.billingInfo?.address?.city}
        </span>
      </div>
    </div>
  </div>
  <Link href="/" className="underline mt-6">
    ¿Tienes algún problema? Contáctanos
  </Link>
</div>
  );
};

export default OrderPage;