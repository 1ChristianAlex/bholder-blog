import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm, Logo } from 'components';
import { BackGroundBlack, ContainerCenter } from './styled';
import { useHistory } from 'react-router-dom';
import { Auth } from 'services/Auth';

const Login: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (Auth.isLoged()) {
      history.push('/');
    }
  }, [history]);

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
