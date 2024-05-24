import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function viewProfiles() {
const updateProfileURL = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(updateProfileURL)

  return await response.json()
}

export async function viewProfile(name) {
  if (!name) {
    throw new Error("Get needs a profile name")
  }
  const viewProfileURL = `${API_AUCTION_URL}${action}/${name}`;
  
    const response = await authFetch(viewProfileURL)
  
    return await response.json()
  }