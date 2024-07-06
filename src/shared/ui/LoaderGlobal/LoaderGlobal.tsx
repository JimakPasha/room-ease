import { FC } from "react";

import { GlobalLoaderContainer, Overlay, Loader } from "./LoaderGlobal.styles";

export const LoaderGlobal: FC = () => (
  <GlobalLoaderContainer>
    <Overlay />
    <Loader size={80} />
  </GlobalLoaderContainer>
);
