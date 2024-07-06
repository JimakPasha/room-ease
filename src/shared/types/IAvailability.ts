import { IPrice } from "./IPrice";
import { RoomAvailabilityType } from "./RoomAvailabilityType";

export interface IAvailability {
  availabilityStatus: RoomAvailabilityType;
  price: IPrice | null;
}
