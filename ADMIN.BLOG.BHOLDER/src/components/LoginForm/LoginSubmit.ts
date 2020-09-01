import { authInstance } from 'services/Auth';
import { SubmissionError } from 'redux-form';
import { toast } from 'react-toastify';
import { updateUser } from 'redux/actions/user';
import { RouteComponentProps } from 'react-router-dom';

interface ILogin {
  email: string;
  password: string;
}

const LoginSubmit = async (
  values: ILogin,
  dispatch: Function,
  { history }: RouteComponentProps
) => {
  try {
    const erros: any = {};

    if (!values.email) {
      erros.email = 'Email is required';
    }
    if (!values.password) {
      erros.password = 'Password is required';
    }

    if (Object.values(erros).find((err) => Boolean(err))) {
      throw erros;
    } else {
      const loginResponse = await authInstance.login(
        values.email,
        values.password
      );

      dispatch(updateUser(loginResponse.user));

      history.push('/');
    }
  } catch (error) {
    Object.keys(error).forEach((err) => {
      toast.error(error[err]);
    });

    throw new SubmissionError(error);
  }
};

export default LoginSubmit;
