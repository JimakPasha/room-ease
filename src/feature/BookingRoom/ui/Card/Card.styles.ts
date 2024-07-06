import { styled } from "@mui/system";
import {
  Box,
  CardContent,
  Avatar,
  ListItem as MuiListItem,
  Divider,
  Typography,
} from "@mui/material";

export const GridCardBox = styled(Box)({
  width: 380,
  height: 580,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
});

export const GridCardContent = styled(CardContent)({
  flex: 1,
});

export const ListCard = styled(MuiListItem)({
  alignItems: "flex-start",
  gap: 14,
  borderBottom: "1px solid #ebebeb",
});

export const RoomNameTypography = styled(Typography)({
  variant: "h5",
  textAlign: "center",
  minHeight: "5rem",
});

export const DividerStyle = styled(Divider)({
  margin: "8px 0 8px",
});

export const BoxRoomActions = styled(Box)({
  padding: 14,
});

export const ListAvatar = styled(Avatar)({
  width: 200,
  height: 200,
});

export const ListCardContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 1,
});
