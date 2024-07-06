import { SortingType } from "../types";
import { IRoom } from "../../../shared/types";

interface GetSortedRoomsProps {
  rooms: IRoom[];
  sortBy: SortingType;
}

export const getSortedRooms = ({ rooms, sortBy }: GetSortedRoomsProps) => {
  
  return [...rooms].sort((a, b) => {
    switch (sortBy) {
      case SortingType.PRICE_ASC:
        return a.price.value - b.price.value;
      case SortingType.PRICE_DESC:
        return b.price.value - a.price.value;
      case SortingType.NAME_ASC:
        return a.name.localeCompare(b.name);
      case SortingType.NAME_DESC:
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
};
