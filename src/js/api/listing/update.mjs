import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "put";

export async function updateListing(postData) {
  if (!postData.id) {
    throw new Error("Update requires a post ID")
  }
  const updateListingURL = `${API_AUCTION_URL}${action}/${postData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(postData)
  })

  return await response.json()
}