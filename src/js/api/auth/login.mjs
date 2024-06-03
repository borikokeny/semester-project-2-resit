import { API_AUCTION_URL } from "../constants.mjs";
import {save} from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
 
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body: JSON.stringify(profile)
  })

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json());
    save("token", accessToken);
    save("profile", profile);

    alert("You are now logged in");

    return profile;
  }

  throw new Error("Could not login");
  
  // const {accessToken, ...userProfile} = await response.json()

  // storage.save("token", accessToken)

  // storage.save("profile", userProfile)

  // alert("You are now logged in")
}