import { useState, useEffect } from "react";
import { IRoom } from "../types";
import { getRooms } from "../../api";

export const useGetRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getRooms()
      .then((data) => setRooms(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { rooms, isLoading, isError };
};
