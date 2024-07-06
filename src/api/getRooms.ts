import { api } from "./api";
import { URLS } from "./constants";

export const getRooms = async () => {
  try {
    const { data } = await api.get(URLS.GET_ROOMS);

    return data;
  } catch (error) {
    throw new Error();
  }
};
