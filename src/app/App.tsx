import { Header } from "../feature";
import { ErrorBoundary, MainContainer } from "../shared/ui";
import { NotificationProvider } from "./contexts/notification";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <NotificationProvider>
        <Header />
        <MainContainer>
          <AppRoutes />
        </MainContainer>
      </NotificationProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
