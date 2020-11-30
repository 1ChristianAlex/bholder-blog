import { Button } from '@material-ui/core';
import styled from 'styled-components';

interface ButtonStyleProps {
  $primary: boolean;
}

const ButtonStyle = styled(Button)<ButtonStyleProps>`
  color: ${(props) => (props.$primary ? props.theme.black : props.theme.white)};
  background-color: ${(props) =>
    props.$primary ? props.theme.yellow : props.theme.purple};
  font-size: 14px;
  border: 1px solid;
  border-color: ${(props) =>
    !props.$primary ? props.theme.yellow : props.theme.purple};

  :hover {
    border-color: ${(props) =>
      props.$primary ? props.theme.yellow : props.theme.purple};
    background-color: ${(props) =>
      !props.$primary ? props.theme.yellow : props.theme.purple};
    color: ${(props) =>
      !props.$primary ? props.theme.black : props.theme.white};
  }
`;

export { ButtonStyle };
