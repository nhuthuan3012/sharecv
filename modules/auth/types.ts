export interface IUserLogin {
    username: string;
    password: string
}

export interface IUserRegister {
    fullname: string;
    email: string;
    phone: string;
    password: string;
    password_again: string;
    role: string;
    // role: string;
}