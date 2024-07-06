import { AlertColor } from "@mui/material";

export interface INotification {
  message: string;
  severity: AlertColor;
  isOpen: boolean;
}

export interface INotificationContext {
  showNotification: (message: string, severity?: AlertColor) => void;
}
