import { useEffect, useMemo, useState } from "react";
import { DEFAULT_CURRENT_PAGE, ROOMS_ON_PAGE } from "../constants";
import { SortingType } from "../types";
import { getSortedRooms } from "../utils";
import { useGetRooms } from "../../../shared/hooks/useGetRooms";
import { useBookRoom } from "../../../shared/hooks/useBookRoom";
import { IRoom, ViewType } from "../../../shared/types";

export const useBookingRoomData = () => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [sortedRooms, setSortedRooms] = useState<IRoom[]>([]);

  const [sortValue, setSortValue] = useState(SortingType.PRICE_ASC);
  const [isCheckAllAvailability, setIsCheckAllAvailability] = useState(false);

  const [view, setView] = useState(ViewType.GRID);

  const {
    rooms,
    isLoading: isLoadingRooms,
    isError: isErrorRooms,
  } = useGetRooms();

  const { handleBook, isLoading: isLoadingBook } = useBookRoom();

  useEffect(() => {
    const sortedRooms = getSortedRooms({
      rooms,
      sortBy: sortValue,
    });

    setSortedRooms(sortedRooms);
  }, [rooms, sortValue]);

  const handleSort = (sortBy: SortingType) => {
    setSortValue(sortBy);
    setCurrentPage(DEFAULT_CURRENT_PAGE);
  };

  const displayedRooms = useMemo(
    () =>
      sortedRooms.slice(
        (currentPage - 1) * ROOMS_ON_PAGE,
        currentPage * ROOMS_ON_PAGE
      ),
    [currentPage, sortedRooms]
  );
  
  return {
    filters: {
      sortValue,
      isCheckAllAvailability,
      setIsCheckAllAvailability,
      handleSort,
    },
    pagination: {
      sortedRoomsLenght: sortedRooms.length,
      currentPage,
      setCurrentPage,
    },
    list: {
      roomsLength: rooms.length,
      displayedRooms,
      view,
      isLoadingRooms,
      isErrorRooms,
      isLoadingBook,
      handleBook,
      setView,
    },
  };
};
