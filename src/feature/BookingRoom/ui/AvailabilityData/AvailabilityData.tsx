import { Chip, Typography } from "@mui/material";
import { FC } from "react";
import { IAvailability } from "../../../../shared/types";
import { getAvailabilityDescription, getChipColor } from "../../utils";

import { PriceTypography, RightAlignedBox } from "./AvailabilityData.styles";

interface AvailabilityDataProps {
  priceBeforeCheck: number;
  availabilityData: IAvailability;
}

export const AvailabilityData: FC<AvailabilityDataProps> = ({
  priceBeforeCheck,
  availabilityData: { availabilityStatus, price },
}) => (
  <>
    {price && (
      <>
        <Typography variant="body1">
          Price after check: {price.value} {price.currencyCode}
        </Typography>
        <PriceTypography variant="body1">
          {getAvailabilityDescription({
            price,
            availabilityStatus,
            priceBeforeCheck,
          })}
        </PriceTypography>
      </>
    )}
    <RightAlignedBox>
      <Chip
        label={availabilityStatus}
        color={getChipColor(availabilityStatus)}
      />
    </RightAlignedBox>
  </>
);
