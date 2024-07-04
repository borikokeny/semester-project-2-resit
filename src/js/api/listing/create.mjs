import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";
const method = "post";

export async function createListing(postData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await fetch(createListingURL, {
    method,
    headers: headers(),
    body: JSON.stringify({
      title: postData.title,
      description: postData.description,
      media: postData.media.split(","),
      endsAt: postData.endsAt
    }),
  })

  return await response.json()
}