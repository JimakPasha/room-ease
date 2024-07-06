import { styled } from "@mui/system";
import { Container, Typography } from "@mui/material";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});

export const StyledTypography = styled(Typography)({
  marginBottom: "1rem",
});
