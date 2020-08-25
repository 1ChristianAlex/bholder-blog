import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { InputText, Button } from 'components';
import { LoginContainer } from './styles';

const LoginForm: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <LoginContainer>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <InputText type="email" label="E-mail" block />
            </Grid>
            <Grid item md={12}>
              <InputText type="password" label="Password" block />
            </Grid>
            <Grid item md={12}>
              <Button block>Login</Button>
            </Grid>
          </Grid>
        </LoginContainer>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
