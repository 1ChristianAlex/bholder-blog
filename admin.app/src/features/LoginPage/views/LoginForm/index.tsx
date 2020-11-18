import React, { FC } from 'react';
import { Grid, Card, CardContent, TextField } from '@material-ui/core';
import { ButtonBholder } from '../../../../components';
import { LoginContainer } from './style';
import { useHistory } from 'react-router';

const LoginForm: FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/dashboard');
  };
  return (
    <Card>
      <CardContent>
        <LoginContainer>
          <Grid container spacing={4} direction="column">
            <Grid item xs>
              <TextField fullWidth label="Usuário / E-mail" variant="filled" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                variant="filled"
              />
            </Grid>
            <Grid item xs>
              <ButtonBholder onClick={handleLogin} fullWidth>
                Entrar
              </ButtonBholder>
            </Grid>
          </Grid>
        </LoginContainer>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
