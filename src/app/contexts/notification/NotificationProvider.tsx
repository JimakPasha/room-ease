import { FC, ReactNode, useState } from "react";
import { Alert, AlertColor, AlertTitle, Snackbar } from "@mui/material";
import { NotificationContext } from "./NotificationContext";
import { INotification } from "./types";

interface NotificationProvider {
  children: ReactNode;
}

export const NotificationProvider: FC<NotificationProvider> = ({
  children,
}) => {
  const [notification, setNotification] = useState<INotification | null>(null);

  const showNotification = (message: string, severity: AlertColor = "info") => {
    setNotification({ message, severity, isOpen: true });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={!!notification?.isOpen}
        autoHideDuration={5000}
        onClose={closeNotification}
      >
        <Alert severity={notification?.severity} onClose={closeNotification}>
          <AlertTitle>{notification?.severity}</AlertTitle>
          {notification?.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
