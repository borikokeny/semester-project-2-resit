// 
import { API_HOST_URL } from "../constants.mjs";
import { save, load } from "../../storage/index.mjs";

export async function login(email, password) {
  const response = await fetch(`${API_HOST_URL}/auth/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Login error:", result);
    throw new Error("Could not login");
  }

  const { accessToken, ...profile } = result.data;

  save("token", accessToken);
  save("profile", profile);

  // Create an API key if one is not already stored
  if (!load("apiKey")) {
    const keyResponse = await fetch(
      `${API_HOST_URL}/auth/create-api-key`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Bidify" }),
      }
    );

    const keyResult = await keyResponse.json();

    if (!keyResponse.ok) {
      console.error("API key error:", keyResult);
      throw new Error("Could not create API key");
    }

    save("apiKey", keyResult.data.key);
  }

  alert("You are now logged in");

  return profile;
}
