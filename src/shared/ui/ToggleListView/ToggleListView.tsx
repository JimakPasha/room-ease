import { FC } from "react";
import { Box, IconButton } from "@mui/material";
import { ViewList, ViewModule } from "@mui/icons-material";
import { ViewType } from "../../types";

interface ToggleListViewProps {
  view: ViewType;
  onChangeView: (view: ViewType) => void;
}

export const ToggleListView: FC<ToggleListViewProps> = ({
  view,
  onChangeView,
}) => (
  <Box>
    <IconButton
      size="small"
      color={view === ViewType.GRID ? "primary" : "default"}
      onClick={() => onChangeView(ViewType.GRID)}
    >
      <ViewModule />
    </IconButton>
    <IconButton
      size="small"
      color={view === ViewType.LIST ? "primary" : "default"}
      onClick={() => onChangeView(ViewType.LIST)}
    >
      <ViewList />
    </IconButton>
  </Box>
);
