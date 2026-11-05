import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update needs a profile name");
  }

  // Accept either a URL string or an avatar object
  const avatar =
    typeof profileData.avatar === "string"
      ? {
          url: profileData.avatar,
          alt: `${profileData.name}'s avatar`,
        }
      : profileData.avatar;

  if (!avatar?.url) {
    throw new Error("A valid avatar URL is required");
  }

  const response = await fetch(
    `${API_AUCTION_URL}/profiles/${encodeURIComponent(profileData.name)}`,
    {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({ avatar }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    console.error("Avatar update error:", result);
    throw new Error(
      result.errors?.[0]?.message || "Could not update avatar"
    );
  }

  return result.data;
}
