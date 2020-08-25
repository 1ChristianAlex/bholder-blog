import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { darkBlue } from 'assets/theme/colors';

export interface InputTextStyleProps {
  block?: boolean;
}

const InputTextStyle = styled(TextField)<InputTextStyleProps>`
  width: ${(props) => (props.block ? '100%' : 'fit-content')};

  label {
    color: ${darkBlue};
  }
`;

export { InputTextStyle };
