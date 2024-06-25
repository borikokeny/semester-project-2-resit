import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch, headers } from "../authFetch.mjs";

const action = "/listings";

export async function viewListings() {
  try {
    const response = await authFetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=created`, {
      method: "GET",
      headers: headers(),
    });
    
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error("Cannot fetch data");
  }  
}

export async function viewListing(id) {
  if (!id) {
    throw new Error("Get needs a post ID")
  }
  const viewListingURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;
  
    const response = await authFetch(viewListingURL);
  
    return await response.json();
  }