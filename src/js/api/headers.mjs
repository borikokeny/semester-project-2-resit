import { load } from "../storage/index.mjs";

export function headers() {
  const token = load("token");
  const apiKey = load("apiKey");

  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    ...(apiKey && {
      "X-Noroff-API-Key": apiKey,
    }),
  };
}
