import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { ROUTE_PATHS } from "../../shared/constants";

import { StyledContainer, StyledTypography } from "./NotFound.styles";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => navigate(ROUTE_PATHS.HOME);

  return (
    <StyledContainer>
      <StyledTypography variant="h4" gutterBottom>
        404 - Page Not Found
      </StyledTypography>
      <StyledTypography variant="body1">
        The page you are looking for does not exist
      </StyledTypography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigateToHome}
      >
        Home
      </Button>
    </StyledContainer>
  );
};
