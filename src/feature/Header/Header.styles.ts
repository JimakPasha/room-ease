import { styled } from "@mui/system";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  position: "static",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "20px",
  flexGrow: 1,
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
}));

export const StyledLinkBox = styled(Box)({
  marginRight: 12,
});

export const StyledLinkTypography = styled(Typography)({
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "14px",
});
