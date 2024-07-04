import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";

export async function viewProfiles() {
  const response = await fetch(`${API_AUCTION_URL}${action}`, {
    method: "GET",
    headers: headers(),
  })

  return await response.json()
}

export async function viewProfile(name) {
  if (!name) {
    throw new Error("Get needs a profile name")
  }
    const response = await fetch(`${API_AUCTION_URL}${action}/${name}`, {
      method: "GET",
      headers: headers(),
    })
  
    return await response.json()
  }