import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { darkBlue } from 'assets/theme/colors';

const InputTextStyle = styled(TextField)`
  label {
    color: ${darkBlue};
  }
`;

export { InputTextStyle };
