import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
 
  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body: JSON.stringify(profile)
    // body: JSON.stringify({
    //   name: profile.name,
    //   email: profile.email
    // })
  })

  const result = await response.json()
  alert("You are now registered")
  return result
}
