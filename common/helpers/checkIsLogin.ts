import { getCookie } from "./getCookies";

import { TOKEN } from "../constants/cookies";

export const checkIsLogin = () => !!getCookie(TOKEN);