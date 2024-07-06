import { FC, useState } from "react";
import {
  Typography,
  CardMedia,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { AvailabilityData } from "./../AvailabilityData";
import { RoomActions } from "./../RoomActions";
import { BookModal } from "./../BookModal";
import roomPlaceholder from "../../../../assets/room_placeholder.webp";
import { useGetAvailabilityRoom } from "../../../../shared/hooks/useGetAvailabilityRoom";
import { IRoom, ViewType } from "../../../../shared/types";

import {
  BoxRoomActions,
  DividerStyle,
  GridCardBox,
  GridCardContent,
  ListAvatar,
  ListCard,
  ListCardContent,
  RoomNameTypography,
} from "./Card.styles";

interface CardProps {
  room: IRoom;
  isCheckAllAvailability: boolean;
  view: ViewType;
  onBook: (room: IRoom) => void;
}

export const Card: FC<CardProps> = ({
  room,
  isCheckAllAvailability,
  onBook,
  view,
}) => {
  const [isOpenBookModal, setIsOpenBookModal] = useState(false);

  const { availabilityData, isLoading, isError, fetchAvailabilityData } =
    useGetAvailabilityRoom({
      id: room.id,
      isCheckAllAvailability,
    });

  const handleClickGetAvailability = () => {
    fetchAvailabilityData();
    setIsOpenBookModal(true);
  };

  const handleBook = () => onBook(room);

  const handleCloseBookModal = () => setIsOpenBookModal(false);

  const handleSubmit = () => {
    onBook(room);
    handleCloseBookModal();
  };

  return (
    <>
      {view === ViewType.GRID ? (
        <GridCardBox>
          <CardMedia
            component="img"
            height="150"
            image={roomPlaceholder}
            alt={room.name}
          />
          <GridCardContent>
            <RoomNameTypography>{room.name}</RoomNameTypography>
            <DividerStyle />
            <Typography variant="body1">
              Price: {room.price.value} {room.price.currencyCode}
            </Typography>
            <DividerStyle />
            {availabilityData && (
              <AvailabilityData
                priceBeforeCheck={room.price.value}
                availabilityData={availabilityData}
              />
            )}
          </GridCardContent>
          <BoxRoomActions>
            <RoomActions
              availabilityData={availabilityData}
              isLoading={isLoading}
              isError={isError}
              onBook={handleBook}
              onClickGetAvailability={handleClickGetAvailability}
            />
          </BoxRoomActions>
        </GridCardBox>
      ) : (
        <>
          <ListCard>
            <ListItemAvatar>
              <ListAvatar
                variant="rounded"
                alt={room.name}
                src={roomPlaceholder}
              />
            </ListItemAvatar>
            <ListItemText
              primary={room.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Price: {room.price.value} {room.price.currencyCode}
                  </Typography>
                  {availabilityData && (
                    <AvailabilityData
                      priceBeforeCheck={room.price.value}
                      availabilityData={availabilityData}
                    />
                  )}
                </>
              }
            />
            <ListCardContent>
              <RoomActions
                availabilityData={availabilityData}
                isLoading={isLoading}
                isError={isError}
                onBook={handleBook}
                onClickGetAvailability={handleClickGetAvailability}
              />
            </ListCardContent>
          </ListCard>
        </>
      )}

      <BookModal
        isOpen={isOpenBookModal}
        title={room.name}
        roomPriceValue={room.price.value}
        availabilityData={availabilityData}
        isError={isError}
        onSubmit={handleSubmit}
        onClose={handleCloseBookModal}
      />
    </>
  );
};
