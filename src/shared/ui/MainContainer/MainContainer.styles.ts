import { styled } from "@mui/system";
import Container from "@mui/material/Container";

export const MainContainerStyled = styled(Container)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: theme.spacing(4),
}));
