import { myStoreInfo } from "../../../contants/general";
import { wixHandleCheckout } from "../../../services/wixClient/checkout/wixHandleCheckout";
import { useRouter } from "next/navigation";

export const useClientHandleCheckout = () => {
    const { plan } = myStoreInfo;
    const router = useRouter()

    const handleCheckout = async () => {
        if (plan === "simple-whatsapp") {
            router.push("/checkout")
        } else {
            const response = await wixHandleCheckout();
            return response;
        }
    };

    return { handleCheckout };
};
