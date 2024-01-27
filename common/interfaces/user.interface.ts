export interface IUser {
  first_name: string;

  last_name: string;

  email: string;

  phone: string;
}

export interface IUserInfoRequest {
  first_name: string;

  last_name: string;

  email: string;

  phone: string;
}

export interface IUserPasswordRequest {
  old_password: string;
  new_password: string;
  new_password_again: string;
}
