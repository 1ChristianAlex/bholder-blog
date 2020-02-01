import React from 'react';
import { LinkItem, IconContainer, TextContainer } from './styled';

export interface ILink {
  url: string;
  Icon?: React.FC;
  text: string;
}

const LinkButton: React.FC<ILink> = ({ text, url, Icon }) => (
  <LinkItem to={url}>
    {text && <TextContainer>{text}</TextContainer>}
    {Icon && (
      <IconContainer>
        <Icon />
      </IconContainer>
    )}
  </LinkItem>
);

export default LinkButton;
