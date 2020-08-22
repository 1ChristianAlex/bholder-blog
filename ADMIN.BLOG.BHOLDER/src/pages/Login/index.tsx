import React from 'react';
import { Grid } from '@material-ui/core';

import { BackGroundBlack } from './styled';

const Login: React.FC = () => {
  return (
    <BackGroundBlack>
      <Grid container>
        <Grid item> box</Grid>
      </Grid>
    </BackGroundBlack>
  );
};

export default Login;
