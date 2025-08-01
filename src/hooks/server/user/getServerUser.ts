import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";
import { members } from '@wix/members'; // or wherever it's defined
import { getWixServerUser } from "../../../services/wixClient/user/getWixServerUser";


export const getServerUser = async () => {

    const response = await getWixServerUser()

    return response;
};