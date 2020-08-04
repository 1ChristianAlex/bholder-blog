import styled from 'styled-components';
import { defaultColors } from 'assets/colors';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ISLogoText {
  fontSize?: string;
}
export const LogoText = styled.h3<ISLogoText>`
  font-family: 'Righteous', cursive;
  font-size: ${props => props.fontSize || '40px'};
  color: ${defaultColors.yellow};
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const LogoContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export const LogoImage = styled(Image)`
  height: ${props => props.height || 90};
`;