import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function viewListings() {
const updateListingURL = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(updateListingURL)

  return await response.json()
}

export async function viewListing(id) {
  if (!id) {
    throw new Error("Get needs a post ID")
  }
  const viewListingURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;
  
    const response = await authFetch(viewListingURL);
  
    return await response.json();
  }