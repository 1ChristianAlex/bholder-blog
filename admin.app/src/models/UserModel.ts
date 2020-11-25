class Login {
  constructor(public email: string, public password: string) {}
}

class LoginData {
  constructor(public token: string, public user: User) {}
}

class User {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string
  ) {}
  public id: number | undefined;
  public image: string | undefined;
}

export { Login, User, LoginData };
