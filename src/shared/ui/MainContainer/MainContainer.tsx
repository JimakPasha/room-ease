import { FC, ReactNode } from "react";

import { MainContainerStyled } from "./MainContainer.styles";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => (
  <MainContainerStyled>{children}</MainContainerStyled>
);
