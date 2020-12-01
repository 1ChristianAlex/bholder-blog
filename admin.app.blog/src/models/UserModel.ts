class Login {
  constructor(props?: Login) {
    Object.assign(this, props);
  }
  public email?: string;
  public password?: string;
}

class LoginData {
  public token!: string;
  public user!: User;

  constructor(props: LoginData) {
    Object.assign(this, props);
  }
}

class User {
  constructor(props?: User) {
    Object.assign(this, props);
  }

  public firstName?: string;
  public lastName?: string;
  public email?: string;

  public id?: number;
  public image?: string;
}

export { Login, User, LoginData };
