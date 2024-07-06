import { useState, useEffect, useCallback } from "react";
import { IAvailability } from "../types";
import { getAvaiabilityRoom } from "../../api";

interface UseGetAvailabilityRoomProps {
  id: number;
  isCheckAllAvailability: boolean;
}

export const useGetAvailabilityRoom = ({
  id,
  isCheckAllAvailability,
}: UseGetAvailabilityRoomProps) => {
  const [availabilityData, setAvailabilityData] =
    useState<IAvailability | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAvailabilityData = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    getAvaiabilityRoom({ id })
      .then((data) => setAvailabilityData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    if (isCheckAllAvailability && !availabilityData) {
      fetchAvailabilityData();
    }
  }, [availabilityData, isCheckAllAvailability, fetchAvailabilityData]);

  return {
    availabilityData,
    isLoading,
    isError,
    fetchAvailabilityData,
  };
};
