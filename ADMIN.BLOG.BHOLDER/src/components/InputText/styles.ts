import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export interface InputTextStyleProps {
  isInvalid: boolean;
}

const InputTextStyle = styled(TextField)<InputTextStyleProps>`
  ${(props) => (props.isInvalid ? { 'border-botom': '1px solid red' } : '')}
  label {
    color: ${(props) => props.theme.darkBlue};
  }
`;

export { InputTextStyle };
