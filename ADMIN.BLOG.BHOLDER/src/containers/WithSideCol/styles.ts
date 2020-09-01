import styled from 'styled-components';

import { Grid } from '@material-ui/core';

const ColBackground = styled(Grid)`
  background-color: ${(props) => props.theme.darkBlue};
  height: calc(100vh - 35px);

  * {
    color: ${(props) => props.theme.white};
  }
`;

export { ColBackground };
