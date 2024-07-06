import { useState } from "react";
import { useNotification } from "./useNotification";
import { IRoom } from "../types";
import { fakeServerRequest } from "../../mocks/fakeServerRequest";

export const useBookRoom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { showNotification } = useNotification();

  const handleBook = (room: IRoom) => {
    setIsLoading(true);

    fakeServerRequest({ response: room })
      .then((data) => {
        showNotification(
          `Congratulations! You have booked the room ${data.name}`,
          "success"
        );
        console.log("Booking room:", room);
      })
      .catch((error) => {
        showNotification(
          `After attempting to book, an unknown error occurred`,
          "error"
        );
        console.error(`Error: ${error}`);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, handleBook };
};
