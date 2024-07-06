import { FC } from "react";
import { Button, CircularProgress } from "@mui/material";
import { IAvailability, RoomAvailabilityType } from "../../../../shared/types";

import { CheckAvailabilityButton } from "./RoomActions.styles";

interface RoomActionsProps {
  availabilityData: IAvailability | null;
  isLoading: boolean;
  isError: boolean;
  onBook: () => void;
  onClickGetAvailability: () => void;
}

export const RoomActions: FC<RoomActionsProps> = ({
  availabilityData,
  isLoading,
  isError,
  onBook,
  onClickGetAvailability,
}) => (
  <>
    {availabilityData && (
      <Button
        variant="contained"
        color="primary"
        disabled={
          (availabilityData.availabilityStatus !==
            RoomAvailabilityType.Available &&
            !isError) ||
          isLoading
        }
        onClick={onBook}
        fullWidth
      >
        book
      </Button>
    )}
    <CheckAvailabilityButton
      variant="contained"
      color="primary"
      onClick={onClickGetAvailability}
      startIcon={isLoading && <CircularProgress size={20} color="inherit" />}
      disabled={isLoading}
      fullWidth
    >
      check availability {availabilityData && "again"}
    </CheckAvailabilityButton>
  </>
);
