import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";

export async function viewListings() {
  try {
    const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=created`, {
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

export async function viewHighBidListings() {
  try {
    const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=endsAt&sortOrder=desc&limit=3`, {
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

export async function endingSoonListings() {
  try {
    const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&limit=3`, {
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
  const response = await fetch(`${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`, {
    method: "GET",
    headers: headers(),
  });
  
    return await response.json();
  }