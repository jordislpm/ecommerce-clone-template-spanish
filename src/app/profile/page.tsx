import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";
import { wixClientServerApi } from "../../lib/wixClients/WixClientServer";
import { updateUser } from "../../lib/actions/user/updateUser";
import UpdateButton from "../../components/share/UpdateButton";
import { getServerUser } from "../../hooks/server/user/getServerUser";
import ProfileNotLogged from "../../components/share/ProfileNotLogged";

const ProfilePage = async () => {


    const user = await getServerUser()


    if (!user?.member?.contactId) {
        return <div className=""><ProfileNotLogged/></div>;
    }

    // const orderRes = await wixClient.orders.searchOrders({
    //     search: {
    //         filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
    //     },
    // });


    return (
      <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center pt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <div className="w-full md:w-1/2">
    <h1 className="text-2xl">Perfil</h1>
    <form
      action={updateUser}
      className="mt-12 flex flex-col gap-4"
    >
      <input type="text" hidden name="id" value={user.member.contactId} />
      
      <label className="text-sm text-gray-700">Nombre de usuario</label>
      <input
        type="text"
        name="username"
        placeholder={user.member?.profile?.nickname || "juan"}
        className="ring-1 ring-main rounded-md p-2 max-w-96"
      />

      <label className="text-sm text-gray-700">Nombre</label>
      <input
        type="text"
        name="firstName"
        placeholder={user.member?.contact?.firstName || "Juan"}
        className="ring-1 ring-main rounded-md p-2 max-w-96"
      />

      <label className="text-sm text-gray-700">Apellido</label>
      <input
        type="text"
        name="lastName"
        placeholder={user.member?.contact?.lastName || "Pérez"}
        className="ring-1 ring-main rounded-md p-2 max-w-96"
      />

      <label className="text-sm text-gray-700">Teléfono</label>
      <input
        type="text"
        name="phone"
        placeholder={
          (user.member?.contact?.phones &&
            user.member?.contact?.phones[0]) ||
          "+1234567"
        }
        className="ring-1 ring-main rounded-md p-2 max-w-96"
      />

      <label className="text-sm text-gray-700">Correo electrónico</label>
      <input
        type="email"
        name="email"
        placeholder={user.member?.loginEmail || "juan@gmail.com"}
        className="ring-1 ring-main rounded-md p-2 max-w-96"
      />

      <UpdateButton />
    </form>
  </div>

  <div className="w-full md:w-1/2">
    <h1 className="text-2xl">Pedidos</h1>
    <div className="mt-12 flex flex-col">
      {/* {orderRes.orders.map((order) => (
        <Link
          href={`/orders/${order._id}`}
          key={order._id}
          className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
        >
          <span className="w-1/4">{order._id?.substring(0, 10)}...</span>
          <span className="w-1/4">
            ${order.priceSummary?.subtotal?.amount}
          </span>
          {order._createdDate && (
            <span className="w-1/4">{format(order._createdDate)}</span>
          )}
          <span className="w-1/4">{order.status}</span>
        </Link>
      ))} */}
    </div>
  </div>
</div>

    );
};

export default ProfilePage;