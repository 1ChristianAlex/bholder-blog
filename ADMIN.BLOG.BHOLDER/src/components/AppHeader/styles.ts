import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const BackgroundHeader = styled(Grid)`
  background-color: ${(props) => props.theme.darkBlue};
  height: 45px;
  * {
    color: ${(props) => props.theme.white};
  }
`;

export { BackgroundHeader };
