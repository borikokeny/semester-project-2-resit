export const API_KEY = "";
export const API_HOST_URL = 'https://v2.api.noroff.dev';

//ujak lejjebb
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";
import { load } from "../storage/index.mjs";

// export const API_BASE = '/api/v1';

export const API_AUCTION_BASE = '/auction';
export const API_AUCTION_URL = `${API_HOST_URL}${API_AUCTION_BASE}`;

// export async function getAPIKey(){
//   const response = await fetch(API_HOST_URL + API_AUTH + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${load("token")}`
//     },
//     body: JSON.stringify({
//       name: "Test key"
//     })
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   console.error(await response.json());
//   throw new Error("Could not get the API Key");
// }

// getAPIKey().then(console.log)