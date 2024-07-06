import { FC } from "react";
import { Modal } from "../../../../shared/ui";
import { IAvailability, RoomAvailabilityType } from "../../../../shared/types";
import { AvailabilityData } from "../AvailabilityData";

interface BookModalProps {
  isOpen: boolean;
  title: string;
  roomPriceValue: number;
  availabilityData: IAvailability | null;
  isError: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export const BookModal: FC<BookModalProps> = ({
  isOpen,
  title,
  roomPriceValue,
  availabilityData,
  isError,
  onSubmit,
  onClose,
}) => (
  <Modal
    isOpen={isOpen}
    title={title}
    submitLabel="Book"
    onClose={onClose}
    onSubmit={
      availabilityData?.availabilityStatus === RoomAvailabilityType.Available &&
      !isError
        ? onSubmit
        : undefined
    }
  >
    {availabilityData && (
      <AvailabilityData
        priceBeforeCheck={roomPriceValue}
        availabilityData={availabilityData}
      />
    )}
  </Modal>
);
