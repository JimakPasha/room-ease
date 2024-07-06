import { FC } from "react";
import { Link } from "react-router-dom";

import { links } from "./constants";
import { ROUTE_PATHS } from "../../shared/constants";

import {
  StyledAppBar,
  StyledToolbar,
  StyledTypography,
  StyledLinkBox,
  StyledLinkTypography,
} from "./Header.styles";

export const Header: FC = () => (
  <StyledAppBar>
    <StyledToolbar>
      <StyledTypography variant="h1">
        <Link to={ROUTE_PATHS.HOME}>Room Ease Booking</Link>
      </StyledTypography>
      {links.map(({ id, title, path }) => (
        <StyledLinkBox key={id}>
          <Link to={path}>
            <StyledLinkTypography>{title}</StyledLinkTypography>
          </Link>
        </StyledLinkBox>
      ))}
    </StyledToolbar>
  </StyledAppBar>
);
