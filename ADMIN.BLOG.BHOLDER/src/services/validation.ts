import { ILogin } from 'interfaces';

class Validation {
  private EmailRegex = new RegExp(
    /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/,
    'ig',
  );

  public LoginValidaion(login: ILogin) {
    const error = [];
    if (!login.email || !this.EmailRegex.test(login?.email)) {
      error.push('Email invalido');
    }
    if (!login.password) {
      error.push('Senha vazia');
    }
    if (error.length > 0) {
      return error;
    }

    return true;
  }

  static getInstance() {
    return new Validation();
  }
}

export default Validation;
