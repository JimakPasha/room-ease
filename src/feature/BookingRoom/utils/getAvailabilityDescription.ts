import { IPrice, RoomAvailabilityType } from "../../../shared/types";

interface getAvailabilityDescriptionProps {
  price: IPrice;
  availabilityStatus: RoomAvailabilityType;
  priceBeforeCheck: number;
}

export const getAvailabilityDescription = ({
  price,
  availabilityStatus,
  priceBeforeCheck,
}: getAvailabilityDescriptionProps): string => {
  if (availabilityStatus === RoomAvailabilityType.OnRequest) {
    return "You have already booked!";
  }

  if (availabilityStatus === RoomAvailabilityType.SoldOut) {
    return "Unfortunately, the room has already been sold. Please try searching for others.";
  }

  if (availabilityStatus === RoomAvailabilityType.Error) {
    return "An error occurred. Please try again later or choose another room.";
  }

  const diff = priceBeforeCheck - price.value;

  if (diff === 0) {
    return "The price has not changed. Book faster!";
  }

  if (diff < 0) {
    return `Unfortunately has become more expensive by ${Math.abs(diff)} ${
      price.currencyCode
    }. \nIt's in demand, book now before it gets even more expensive!`;
  }

  return `It has become cheaper by ${diff} ${price.currencyCode}! \nBook right now is advantageous!`;
};
