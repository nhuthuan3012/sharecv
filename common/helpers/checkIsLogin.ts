import { getCookie } from "./getCokkies";

import { TOKEN } from "../constants/cookies";

export const checkIsLogin = () => !!getCookie(TOKEN);