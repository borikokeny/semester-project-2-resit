import { load } from "../storage/index.mjs";

export function headers(hasBody = false) {
  const headers = new Headers();
  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body))
  });
}
