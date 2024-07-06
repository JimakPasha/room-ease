import { FC, useMemo } from "react";
import { useBookingRoomData } from "./hooks";
import { ROOMS_ON_PAGE } from "./constants";
import { FilterForm, GridList, ListView } from "./ui";
import { Pagination } from "../../shared/ui";
import { ViewType } from "../../shared/types";
import {
  EmptyListPlaceholder,
  ErrorMessage,
  Loader,
  LoaderGlobal,
} from "../../shared/ui";

import { StyledBox } from "./BookingRoom.styles";

export const BookingRoom: FC = () => {
  const {
    filters: {
      sortValue,
      isCheckAllAvailability,
      setIsCheckAllAvailability,
      handleSort,
    },
    pagination: { sortedRoomsLenght, currentPage, setCurrentPage },
    list: {
      roomsLength,
      displayedRooms,
      view,
      isLoadingRooms,
      isErrorRooms,
      isLoadingBook,
      handleBook,
      setView,
    },
  } = useBookingRoomData();

  const isRenderList = useMemo(
    () => !!(sortedRoomsLenght && !isLoadingRooms && !isErrorRooms),
    [isErrorRooms, isLoadingRooms, sortedRoomsLenght]
  );

  const isEmptyList = useMemo(
    () => !sortedRoomsLenght && !isLoadingRooms && !isErrorRooms,
    [isErrorRooms, isLoadingRooms, sortedRoomsLenght]
  );

  const isRenderPagination = useMemo(
    () => roomsLength > ROOMS_ON_PAGE && !isErrorRooms,
    [roomsLength, isErrorRooms]
  );

  return (
    <StyledBox>
      <FilterForm
        sortValue={sortValue}
        checkAllAvailability={isCheckAllAvailability}
        view={view}
        onSort={handleSort}
        onChangeAvailability={setIsCheckAllAvailability}
        onChangeView={setView}
      />

      {isRenderPagination && (
        <Pagination
          total={sortedRoomsLenght}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          itemsOnPage={ROOMS_ON_PAGE}
          sticky
        />
      )}

      {isLoadingBook && <LoaderGlobal />}
      {isLoadingRooms && <Loader />}
      {isErrorRooms && (
        <ErrorMessage text="Error loading rooms. Please try again later" />
      )}
      {isEmptyList && (
        <EmptyListPlaceholder text="No rooms found. Please try again later" />
      )}
      {isRenderList && (
        <>
          {view === ViewType.GRID && (
            <GridList
              rooms={displayedRooms}
              isCheckAllAvailability={isCheckAllAvailability}
              onBook={handleBook}
            />
          )}
          {view === ViewType.LIST && (
            <ListView
              rooms={displayedRooms}
              isCheckAllAvailability={isCheckAllAvailability}
              onBook={handleBook}
            />
          )}
        </>
      )}
    </StyledBox>
  );
};
