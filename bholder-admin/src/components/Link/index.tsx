import React from "react";
import { LinkItem, IconContainer, TextContainer } from "./styled";

export interface ILink {
  url: string;
  Icon?: React.FC;
  text: string;
  color?: "primary" | "secundary";
}

const LinkButton: React.FC<ILink> = ({ text, url, Icon, color }) => (
  <LinkItem to={url}>
    {text && <TextContainer color={color}>{text}</TextContainer>}
    {Icon && (
      <IconContainer>
        <Icon />
      </IconContainer>
    )}
  </LinkItem>
);

export default LinkButton;
