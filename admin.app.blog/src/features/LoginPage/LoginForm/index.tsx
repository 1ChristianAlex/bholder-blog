import React, { FC, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  TextField,
  FormControl,
} from '@material-ui/core';
import { ButtonBholder } from '../../../components';
import { LoginContainer } from './style';
import { useHistory } from 'react-router';
import Auth from '../../../services/auth';
import { Login } from '../../../models/UserModel';

const LoginForm: FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const credential = new Login({ email, password });

      await Auth.auth(credential);
      history.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmail = (value: string) => {
    setError('');
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setError('');
    setPassword(value);
  };

  return (
    <Card>
      <CardContent>
        <LoginContainer>
          <FormControl fullWidth>
            <Grid container spacing={4} direction="column">
              <Grid item xs>
                <TextField
                  error={Boolean(error)}
                  fullWidth
                  onChange={(event) => handleEmail(event.target.value)}
                  label="Usuário / E-mail"
                  variant="filled"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  error={Boolean(error)}
                  onChange={(event) => handlePassword(event.target.value)}
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
          </FormControl>
        </LoginContainer>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
