import { API_HOST_URL, API_AUTH, API_LOGIN } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { save } from "../../storage/index.mjs";

export async function login(profile) {
  const response = await authFetch(API_HOST_URL + API_AUTH + API_LOGIN, {
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);

    alert("You are now logged in");

    return profile;
  }

  throw new Error("Could not login");
}



// export async function login(profile) {
//   const response = await fetch(loginURL, {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify(profile)
//   })
  
//   const {accessToken, ...userProfile} = await response.json()

//   storage.save("token", accessToken)

//   storage.save("profile", userProfile)

//   alert("You are now logged in")
// }