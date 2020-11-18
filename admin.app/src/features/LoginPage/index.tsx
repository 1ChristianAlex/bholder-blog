import React from 'react';
import { Grid } from '@material-ui/core';
import { BackGroundBlack, ContainerCenter } from './views/style';
import Logo from '../../components/Logo';
import LoginForm from './views/LoginForm';

const LoginPage: React.FC = () => {
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

export default LoginPage;
