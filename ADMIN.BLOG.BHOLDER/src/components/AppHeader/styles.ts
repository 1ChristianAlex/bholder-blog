import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const BackgroundHeader = styled(Grid)`
  background-color: ${(props) => props.theme.darkBlue};
  height: 30px;
  width: 100vw;
  * {
    color: ${(props) => props.theme.white};
  }
`;

export { BackgroundHeader };
