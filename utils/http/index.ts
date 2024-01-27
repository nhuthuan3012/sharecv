import { TOKEN } from "@/common/constants/cookies";
import { getCookie } from "@/common/helpers/getCokkies";
import { API_URL } from "@/config/_constant";

const getRequestURL = (url: string) => {
  if (!url.startsWith("/")) {
    url = `/${url}`;
  }

  // server
  if (typeof window == "undefined") {
    return `${process.env.API_URL}${url}`;
  }
  return `${API_URL}${url}`;
};

const _get = async (url: string, options: RequestInit = {}) => {
  const headers = { ...options.headers };
  if (getCookie(TOKEN)) {
    (headers as any)["Authorization"] = `Bearer ${getCookie(TOKEN)}`;
  }

  const res = await fetch(getRequestURL(url), {
    headers,
    ...options,

    method: "GET",
  });
  if (res.status >= 500) {
    return { status: res.status, detail: res.statusText };
  }

  const responseData = await res?.json();

  return { status: res.status, ...responseData };
};

const _post = async <TEntity>(
  url: string,
  data: TEntity,
  options: RequestInit = {}
) => {
  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  if (getCookie(TOKEN)) {
    (headers as any)["Authorization"] = `Bearer ${getCookie(TOKEN)}`;
  }

  const res = await fetch(getRequestURL(url), {
    body: JSON.stringify(data),
    cache: "no-store",
    headers,
    ...options,
    method: "POST",
  });

  if (res.status >= 500) {
    return { status: res.status, detail: res.statusText };
  }

  const responseData = await res.json();

  return { status: res.status, ...responseData };
};

const _put = async <TEntity>(
  url: string,
  data: TEntity,
  options: RequestInit = {}
) => {
  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  if (getCookie(TOKEN)) {
    (headers as any)["Authorization"] = `Bearer ${getCookie(TOKEN)}`;
  }

  const res = await fetch(getRequestURL(url), {
    cache: "no-store",
    body: JSON.stringify(data),
    headers,
    ...options,
    method: "PUT",
  });

  if (res.status >= 500) {
    return { status: res.status, detail: res.statusText };
  }

  const responseData = await res.json();

  return { status: res.status, ...responseData };
};

const _delete = async (url: string, options: RequestInit = {}) => {
  const headers = { ...options.headers };

  if (getCookie(TOKEN)) {
    (headers as any)["Authorization"] = `Bearer ${getCookie(TOKEN)}`;
  }

  const res = await fetch(getRequestURL(url), {
    cache: "no-store",
    headers,
    ...options,
    method: "DELETE",
  });

  if (res.status >= 500) {
    return { status: res.status, detail: res.statusText };
  }

  const responseData = await res.json();

  return { status: res.status, ...responseData };
};

export const http = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};
