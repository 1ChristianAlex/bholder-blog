import React from "react";
import { Logo as LogoPath } from "assets/images";
import { LogoText, LogoImage, LogoContainer, LogoLink } from "./styled";

export interface ILogo {
  height?: number;
  fontSize?: string;
  hiddeText?: boolean;
}

const Logo: React.FC<ILogo> = ({ height, fontSize, hiddeText = false }) => (
  <LogoContainer>
    <LogoLink to="/admin">
      <LogoImage src={LogoPath} height={height} />
      {!hiddeText && <LogoText fontSize={fontSize}>B-holder</LogoText>}
    </LogoLink>
  </LogoContainer>
);

export default Logo;
