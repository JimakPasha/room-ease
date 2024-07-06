import { ChipOwnProps } from "@mui/material";
import { RoomAvailabilityType } from "../../../shared/types";

export const getChipColor = (
  availabilityStatus: RoomAvailabilityType
): Extract<ChipOwnProps["color"], string> | undefined => {
  const colorMap: Record<
    RoomAvailabilityType,
    Extract<ChipOwnProps["color"], string>
  > = {
    [RoomAvailabilityType.Available]: "success",
    [RoomAvailabilityType.OnRequest]: "primary",
    [RoomAvailabilityType.SoldOut]: "warning",
    [RoomAvailabilityType.Error]: "error",
  };

  return colorMap[availabilityStatus];
};
