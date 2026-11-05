import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";
const method = "post";

export async function createListing(postData) {
  const createListingURL = API_AUCTION_URL + action;

  const media = postData.media
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => ({
      url,
      alt: postData.title,
    }));

  const response = await fetch(createListingURL, {
    method,
    headers: headers(),
    body: JSON.stringify({
      title: postData.title,
      description: postData.description,
      media,
      endsAt: postData.endsAt,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Create listing error:", result);
    throw new Error(
      result.errors?.[0]?.message || "Could not create listing"
    );
  }

  return result.data;
}
