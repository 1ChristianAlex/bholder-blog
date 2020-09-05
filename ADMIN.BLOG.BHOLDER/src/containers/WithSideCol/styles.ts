import styled from 'styled-components';

import { Grid } from '@material-ui/core';

interface ColMainProps {
  widthCss: number;
}

const ColBackground = styled(Grid)`
  background-color: ${(props) => props.theme.darkBlue};
  height: 100vh;

  * {
    color: ${(props) => props.theme.white};
  }
`;

const ColMain = styled.div<ColMainProps>`
  background-color: ${(props) => props.theme.white};
  width: ${(props) => `${props.widthCss}px`};

  * {
    color: ${(props) => props.theme.white};
  }
`;

export { ColBackground, ColMain };

// https://demo.uifort.com/carolina-react-admin-dashboard-pro-demo/DashboardDefault
