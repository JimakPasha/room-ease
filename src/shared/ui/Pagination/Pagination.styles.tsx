import { Box } from "@mui/material";
import { styled, CSSObject } from "@mui/system";

interface StyledBoxProps {
  sticky?: boolean;
}

export const StyledPaginationBox = styled(Box)<StyledBoxProps>(
  ({ sticky }: StyledBoxProps): CSSObject => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: sticky ? "sticky" : "static",
    top: sticky ? 0 : "auto",
    zIndex: sticky ? 1000 : "auto",
    backgroundColor: sticky ? "white" : "transparent",
    padding: "8px 0",
  })
);

export const StyledFullWidthBox = styled(Box)({
  width: "100%",
});

export const FilterActionsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
