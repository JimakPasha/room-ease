import { FC } from "react";
import { Grid } from "@mui/material";
import { IRoom, ViewType } from "../../../../shared/types";
import { Card } from "./../Card";

interface GridListProps {
  rooms: IRoom[];
  isCheckAllAvailability: boolean;
  onBook: (room: IRoom) => void;
}

export const GridList: FC<GridListProps> = ({
  rooms,
  isCheckAllAvailability,
  onBook,
}) => (
  <Grid container justifyContent="center" gap={4}>
    {rooms.map((room) => (
      <Card
        key={room.id}
        room={room}
        isCheckAllAvailability={isCheckAllAvailability}
        view={ViewType.GRID}
        onBook={onBook}
      />
    ))}
  </Grid>
);
