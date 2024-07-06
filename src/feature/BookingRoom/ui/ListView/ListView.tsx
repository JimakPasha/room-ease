import { FC } from "react";
import { IRoom, ViewType } from "../../../../shared/types";
import { Card } from "./../Card";

interface ListViewProps {
  rooms: IRoom[];
  isCheckAllAvailability: boolean;
  onBook: (room: IRoom) => void;
}

export const ListView: FC<ListViewProps> = ({
  rooms,
  isCheckAllAvailability,
  onBook,
}) => {
  return (
    <>
      {rooms.map((room) => (
        <Card
          key={room.id}
          room={room}
          isCheckAllAvailability={isCheckAllAvailability}
          view={ViewType.LIST}
          onBook={onBook}
        />
      ))}
    </>
  );
};
