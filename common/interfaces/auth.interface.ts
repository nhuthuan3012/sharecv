export interface IUserLogin {
  username: string;

  password: string;
}

export interface IUserRegister {
  email: string;

  password: string;

  password_again: string;
}

export interface IResetPasswordRequest {
  email: string;
  code: string;
  password: string;
  password_again: string;
}
