import { FC } from "react";
import { CircularProgress } from "@mui/material";

import { StyledBox } from "./Loader.styles";

export const Loader: FC = () => (
  <StyledBox>
    <CircularProgress />
  </StyledBox>
);
