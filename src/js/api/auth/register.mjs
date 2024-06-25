// import { API_AUCTION_URL } from "../constants.mjs";

// const action = "/auth/register";
// const method = "post";

// export async function register(profile) {
//   const registerURL = API_AUCTION_URL + action;
 
//   const response = await fetch(registerURL, {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method,
//     body: JSON.stringify(profile)
//     // body: JSON.stringify({
//     //   name: profile.name,
//     //   email: profile.email
//     // })
//   })

//   const result = await response.json()
//   alert("You are now registered")
//   return result
// }

import { API_AUCTION_REG } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function register(name, email, password, avatar) {
  try {
    const response = await fetch(API_AUCTION_REG, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({ name, email, password, avatar}),
    });

  if (response.ok) {
    alert("You are now registered");
    return await response.json();
  } else {
    throw new Error("Account could not be registered");
  }
} catch (error) {
  throw error;
}
  }