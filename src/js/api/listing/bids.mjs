import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";
const method = "post";

export async function addABid(bid, id) {
  try {
    if (!id) {
      throw new Error("Bid requires a listing ID");
    }

    const addABidUrl = `${API_AUCTION_URL}${action}/${id}/bids`;

    const response = await fetch(addABidUrl, {
      method,
      headers: headers(),
      body: JSON.stringify({ amount: bid }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.errors[0].message;
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw error;
  }
}