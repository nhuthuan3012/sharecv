import { getAccessCookies } from "./getCookies";

import { TOKEN } from "../constants/cookies";

export const checkIsLogin = () => !!getAccessCookies();