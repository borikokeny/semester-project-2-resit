import { API_AUTH, API_HOST_URL, API_REGISTER } from "../constants.mjs";
// import { authFetch } from "../authFetch.mjs";
// import { headers } from "../headers.mjs";

export async function register(name, email, password) {
  const response = await authFetch(API_HOST_URL + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      name, email, password})
  });

  if (response.ok) {

    alert("You are now registered");

    return await response.json();
  }

  throw new Error("Account could not be registered");
}



// import { API_AUCTION_URL } from "../constants.mjs";



// export async function register(profile) {
//   const registerURL = API_AUCTION_URL + action;
 
//   const response = await fetch(registerURL, {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify(profile)
//   })

//   const result = await response.json()
//   alert("You are now registered")
//   return result
// }