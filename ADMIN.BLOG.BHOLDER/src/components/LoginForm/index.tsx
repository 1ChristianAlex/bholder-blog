import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { InputText, Button } from 'components';
import { LoginContainer } from './styles';
import { Field, reduxForm, submit } from 'redux-form';
import LoginSubmit from './LoginSubmit';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const submitLogin = () => {
    dispatch(submit('login-form'));
  };

  return (
    <Card>
      <CardContent>
        <LoginContainer>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Field
                type="email"
                label="E-mail"
                name="email"
                fullWidth
                component={InputText}
              />
            </Grid>
            <Grid item md={12}>
              <Field
                type="password"
                label="Password"
                name="password"
                fullWidth
                component={InputText}
              />
            </Grid>
            <Grid item md={12}>
              <Button onClick={submitLogin} fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </LoginContainer>
      </CardContent>
    </Card>
  );
};

export default withRouter(
  reduxForm({ form: 'login-form', onSubmit: LoginSubmit })(LoginForm)
);
