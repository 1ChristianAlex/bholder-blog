import React, { useState } from 'react';
import { InputText, Button } from 'components';
import { Auth, Validation } from 'services';
import { ILogin } from 'interfaces';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { updateUser } from 'context/user/action';
import { useDispatch } from 'context/hooks';

import { LoginForm } from './styled';

export const FormLogin: React.FC = () => {
  const [error, setError] = useState<string>('');
  const history = useHistory();
  const dispatch = useDispatch();

  const validation = (login: ILogin) => {
    const val = Validation.getInstance();
    const hasError = val.LoginValidaion(login);

    if (hasError === true) {
      return true;
    }

    hasError.forEach(erro => setError(erro));
  };
  const handleSubmit = async (data: any) => {
    const login: ILogin = data;
    const auth = Auth.getInstance();
    const validationStatus = validation(login);

    if (validationStatus) {
      const user = await auth.Login(login);
      if (user?.token) {
        dispatch(updateUser(user.user));

        history.push('/admin');
      } else {
        setError('Email or password worg');
      }
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <InputText name="email" />
      <InputText name="password" type="password" />
      {error && <Alert variant="danger">{error}</Alert>}

      <Button type="submit" text="Sign in" />
    </LoginForm>
  );
};
export default FormLogin;
