import { authInstance } from 'services/Auth';
import { SubmissionError } from 'redux-form';

interface ILogin {
  email: string;
  password: string;
}

const LoginSubmit = async (values: ILogin, dispatch: Function) => {
  try {
    const erros = {
      email: '',
      password: '',
    };

    if (!values.email) {
      erros.email = 'Email is required';
    }
    if (!values.password) {
      erros.password = 'Password is required';
    }

    if (Object.values(erros).find((err) => Boolean(err))) {
      throw erros;
    } else {
      await authInstance.login(values.email, values.password);
    }
  } catch (error) {
    throw new SubmissionError(error);
  }
};

export default LoginSubmit;
