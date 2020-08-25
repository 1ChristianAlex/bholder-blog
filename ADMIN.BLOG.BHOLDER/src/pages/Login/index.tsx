import React from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm, Logo } from 'components';
import { BackGroundBlack, ContainerCenter } from './styled';

const Login: React.FC = () => {
  return (
    <BackGroundBlack>
      <ContainerCenter>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={6}>
            <Logo width={150} />
          </Grid>
          <Grid item md={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </ContainerCenter>
    </BackGroundBlack>
  );
};

export default Login;
