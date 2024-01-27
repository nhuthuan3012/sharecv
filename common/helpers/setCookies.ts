import Cookies from 'js-cookie';
import { TOKEN } from "@/common/constants/cookies";
import { IAuthResponse } from "../interfaces";

export function setAccessCookies(res: IAuthResponse) {
    console.log(res.access_token)
    Cookies.set(TOKEN, res.access_token, { secure: true });
    Cookies.set("role", res.role, { secure: true });
}

export function getAccessCookies() {
    return Cookies.get(TOKEN);
}

export function getRole() {
    return Cookies.get("role");
}


export function removeAccessCookies() {
    Cookies.remove(TOKEN)
}


export function setRoleCookies(res: IAuthResponse) {
    console.log(res.access_token)
    Cookies.set(TOKEN, res.access_token, { secure: true });
}

export function getRoleCookies() {
    return Cookies.get(TOKEN);
}

export function removeRoleCookies() {
    Cookies.remove(TOKEN)
}