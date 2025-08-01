import { wixClientServerApi } from "../../../lib/wixClients/WixClientServer";
import { members } from '@wix/members'; // or wherever it's defined


export const getWixServerUser = async () => {
  try {
    const wixClient = await wixClientServerApi();
    const user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });

    console.log(user)
    return user;
  } catch (error) {
    console.error('Error getting server user:', error);
    return null;
  }
};