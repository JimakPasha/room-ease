import { createContext } from "react";
import { INotificationContext } from "./types";

export const NotificationContext = createContext<
  INotificationContext | undefined
>(undefined);
