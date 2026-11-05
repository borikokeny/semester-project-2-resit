import { viewProfile } from "../api/profile/view.mjs";
import { load } from "../storage/index.mjs";

export async function renderProfile() {
  const savedProfile = load("profile");
  const profileData = savedProfile?.data || savedProfile;

  console.log("Saved profile:", savedProfile);

  if (!profileData?.name) {
    console.log("No logged-in profile found");
    return;
  }

  try {
    const profile = await viewProfile(profileData.name);

    console.log("Profile received from API:", profile);

    const profileImage = document.querySelector("#profileImage");
    const credit = document.querySelector("#credit");
    const userName = document.querySelector("#userName");
    const userEmail = document.querySelector("#userEmail");

    if (userName) userName.value = profile.name;
    if (userEmail) userEmail.value = profile.email;
    if (credit) credit.innerText = profile.credits;

    if (profileImage) {
      profileImage.src =
        profile.avatar?.url || "/images/Profile-img-placeholder.jpg";
    }
  } catch (error) {
    console.error("Profile loading failed:", error);
  }
}