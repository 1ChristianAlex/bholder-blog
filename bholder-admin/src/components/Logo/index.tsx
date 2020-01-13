import React from 'react';
import { Logo as LogoPath } from 'assets/images';
import { ILogo } from 'interfaces/IComponents';
import { LogoText, LogoImage, LogoContainer, LogoLink } from './styled';

const Logo: React.FC<ILogo> = ({ height }) => (
  <LogoContainer>
    <LogoLink to="/admin">
      <LogoImage src={LogoPath} height={height} />
      <LogoText>Bholder</LogoText>
    </LogoLink>
  </LogoContainer>
);

export default Logo;
