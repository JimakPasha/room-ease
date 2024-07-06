import { FC } from "react";
import { Typography } from "@mui/material";

import { StyledBox } from "./ErrorMessage.styles";

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => (
  <StyledBox>
    <Typography variant="h6" color="error">
      {text}
    </Typography>
  </StyledBox>
);
