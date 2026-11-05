import { viewProfile } from "../api/profile/view.mjs";
import { load } from "../storage/index.mjs";

export async function renderProfile() {
  const savedProfile = load("profile");

  // Stop if no user is logged in
  if (!savedProfile?.name) {
    console.log("No logged-in profile found");
    return;
  }

  const profile = await viewProfile(savedProfile.name);

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

    profileImage.style.objectFit = "cover";
  }
}
