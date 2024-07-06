import { styled } from "@mui/system";
import { CircularProgress, Box } from "@mui/material";

export const GlobalLoaderContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const Overlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: -1,
});

export const Loader = styled(CircularProgress)({
  zIndex: 9999,
  color: "#ffffff",
});
