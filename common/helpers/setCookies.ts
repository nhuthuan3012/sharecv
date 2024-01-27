import Cookies from 'js-cookie';
import { TOKEN, ROLE } from "@/common/constants/cookies";
import { IAuthResponse } from "../interfaces";

export function setAccessCookies(res: IAuthResponse) {
    console.log(res.access_token)
    Cookies.set(TOKEN, res.access_token, { secure: true });
    Cookies.set(ROLE, res.role, { secure: true });
}

export function removeAccessCookies() {
    Cookies.remove(TOKEN)
}

export function setRoleCookies(res: IAuthResponse) {
    console.log(res.access_token)
    Cookies.set(TOKEN, res.access_token, { secure: true });
}

export function removeRoleCookies() {
    Cookies.remove(TOKEN)
}