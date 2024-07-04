import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update needs a profile name")
  }
  const response = await fetch(`${API_AUCTION_URL}${action}/${profileData.name}/media`, {
    method,
    headers: headers(),
    body: JSON.stringify(profileData)
  })

  return await response.json()
}