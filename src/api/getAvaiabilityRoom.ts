import { api } from "./api";
import { URLS } from "./constants";

interface GetAvaiabilityRoomProps {
  id: number;
}

export const getAvaiabilityRoom = async ({ id }: GetAvaiabilityRoomProps) => {
  try {
    const { data } = await api.get(`${URLS.GET_ROOM_AVAIABILLITY}/${id}`);

    return data;
  } catch (error) {
    throw new Error();
  }
};
