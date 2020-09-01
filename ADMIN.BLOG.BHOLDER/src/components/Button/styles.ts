import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { darkTheme } from '../../assets/theme/colors';

export interface ButtonStyleProps {
  bgColor?: typeof darkTheme;
  tColor?: typeof darkTheme;
}

const ButtonStyle = styled(Button)<ButtonStyleProps>`
  background-color: ${(props) => props.bgColor || props.theme.yellow};
  color: ${(props) => props.tColor || props.theme.purple};
  border: 1px solid ${(props) => props.tColor || props.theme.purple};
  font-weight: 600;

  :hover {
    background-color: ${(props) => props.bgColor || props.theme.purple};
    color: ${(props) => props.tColor || props.theme.yellow};
  }
`;
export { ButtonStyle };
