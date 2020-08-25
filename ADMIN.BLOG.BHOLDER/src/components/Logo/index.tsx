import React from 'react';
import { logo } from '../../assets/images';
import { LogoImage, LogoContainer } from './styles';
interface LogoPros {
  width?: number;
}
const Logo: React.FC<LogoPros> = ({ width }) => {
  return (
    <LogoContainer>
      <LogoImage src={logo} width={width} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
