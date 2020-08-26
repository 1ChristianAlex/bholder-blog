import styled from 'styled-components';
import { Button } from '@material-ui/core';
import * as colors from '../../assets/theme/colors';

export interface ButtonStyleProps {
  bgColor?: typeof colors;
  tColor?: typeof colors;
}

const ButtonStyle = styled(Button)<ButtonStyleProps>`
  background-color: ${(props) => props.bgColor || colors.yellow};
  color: ${(props) => props.tColor || colors.purple};
  border: 1px solid ${(props) => props.tColor || colors.purple};
  font-weight: 600;

  :hover {
    background-color: ${(props) => props.bgColor || colors.purple};
    color: ${(props) => props.tColor || colors.yellow};
  }
`;
export { ButtonStyle };
