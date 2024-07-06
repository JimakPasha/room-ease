import { FC } from "react";
import { Typography } from "@mui/material";

import { StyledBox } from "./EmptyListPlaceholder.styles";

interface EmptyListPlaceholderProps {
  text: string;
}

export const EmptyListPlaceholder: FC<EmptyListPlaceholderProps> = ({
  text,
}) => {
  return (
    <StyledBox>
      <Typography variant="h6" color="textSecondary">
        {text}
      </Typography>
    </StyledBox>
  );
};
