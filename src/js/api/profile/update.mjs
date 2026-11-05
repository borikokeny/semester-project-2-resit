import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/profiles";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update needs a profile name");
  }

  const response = await fetch(
    `${API_AUCTION_URL}${action}/${encodeURIComponent(profileData.name)}/media`,
    {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        avatar: {
          url: profileData.avatar,
          alt: `${profileData.name}'s avatar`,
        },
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    console.error("Profile update error:", result);
    throw new Error(result.errors?.[0]?.message || "Could not update profile");
  }

  return result.data;
}