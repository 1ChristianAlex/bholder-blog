import React from 'react';
import { InputText, Button } from 'components';
import { LoginForm } from './styled';

export const FormLogin: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(data);

    /**
     * {
     *   email: 'email@example.com',
     *   password: '123456'
     * }
     */
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <InputText name="email" />
      <InputText name="password" type="password" />

      <Button type="submit" text="Sign in" />
    </LoginForm>
  );
};
export default FormLogin;
