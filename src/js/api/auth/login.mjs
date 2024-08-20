import { API_AUCTION_URL } from "../constants.mjs";
import { save } from "../../storage/index.mjs";
import { headers } from "../headers.mjs";

export async function login(email, password) {
  const response = await fetch(`${API_AUCTION_URL}/auth/login`, {
    headers: headers(),
    method: "POST",
    body: JSON.stringify({email, password}),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json());
    save("token", accessToken);
    save("profile", profile);

    alert("You are now logged in");

    return profile;
  }

  throw new Error("Could not login");
}