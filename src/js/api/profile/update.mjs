import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";
// import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update needs a profile name")
  }
  const response = await authFetch(`${API_AUCTION_URL}${action}/${profileData.name}/media`, {
    method,
    headers: headers(),
    body: JSON.stringify(profileData)
  })

  return await response.json()
}