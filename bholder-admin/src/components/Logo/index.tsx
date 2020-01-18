import React from 'react';
import { Logo as LogoPath } from 'assets/images';
import { LogoText, LogoImage, LogoContainer, LogoLink } from './styled';

export interface ILogo {
  height?: number;
}

const Logo: React.FC<ILogo> = ({ height }) => (
  <LogoContainer>
    <LogoLink to="/admin">
      <LogoImage src={LogoPath} height={height} />
      <LogoText>Bholder</LogoText>
    </LogoLink>
  </LogoContainer>
);

export default Logo;
