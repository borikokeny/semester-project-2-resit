import { API_HOST_URL } from "../constants.mjs";

export async function register(name, email, password, avatar) {

  const body = {
    name,
    email,
    password,
  };

  if (avatar) {
    body.avatar = typeof avatar === "string"
      ? {
          url: avatar,
          alt: `${name}'s avatar`,
        }
      : avatar;
  }

  const response = await fetch(`${API_HOST_URL}/auth/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if (response.ok) {
    alert("You are now registered");
    return result.data;
  } else {
    console.error("Registration error:", result);
    alert(result.errors?.[0]?.message || "Registration failed");
    throw new Error("Cannot register");
  }
}
