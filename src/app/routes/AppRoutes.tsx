import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, NotFoundPage } from "../../pages";
import { ROUTE_PATHS } from "../../shared/constants";

export const AppRoutes: FC = () => (
  <Routes>
    <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
    <Route path={ROUTE_PATHS.ABOUT} element={<AboutPage />} />
    <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);
