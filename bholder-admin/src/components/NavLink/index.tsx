import React from "react";
import { NavLinkItem, IconContainer } from "./styled";

export interface ILink {
  url: string;
  text?: string | undefined;
  Icon?: React.FC;
}

const LinkButton: React.FC<ILink> = ({ text, url, Icon }) => (
  <NavLinkItem activeClassName="active-nav" to={url}>
    {text && text}
    {Icon && (
      <IconContainer>
        <Icon />
      </IconContainer>
    )}
  </NavLinkItem>
);

export default LinkButton;
