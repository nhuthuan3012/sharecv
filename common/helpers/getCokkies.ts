import { isServer } from "./checkIsServer";
import Cookies from 'js-cookie';
import { TOKEN } from "@/common/constants/cookies";

// let getCookie: (key: string) => string | undefined = () => "";

// if (isServer) {
//   const { cookies } = require("next/headers");

//   getCookie = (key: string) => cookies()?.get(key)?.value;
// } else {
//   getCookie = (key: string) => {
//     const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));

//     if (match) return match[2];

//     return "";
//   };
// }

// export { getCookie };

let getCookie = (key: string) => Cookies.get(TOKEN);
export {getCookie};