import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";

export async function viewProfiles() {
  const response = await fetch(`${API_AUCTION_URL}${action}`, {
    method: "GET",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error(`Cannot fetch profiles: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function viewProfile(name) {
  if (!name) {
    throw new Error("Get needs a profile name");
  }

  const response = await fetch(
    `${API_AUCTION_URL}${action}/${encodeURIComponent(name)}`,
    {
      method: "GET",
      headers: headers(),
    }
  );

  if (!response.ok) {
    throw new Error(`Cannot fetch profile: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}
