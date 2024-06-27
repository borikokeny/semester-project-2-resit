import { viewProfile } from "../api/profile/view.mjs";
import { load } from "../storage/index.mjs";

export async function renderProfile() {
  const { name } = load("profile");
  const profile = await viewProfile(name);

  const profileImage = document.querySelector("#profileImage");
  const credit = document.querySelector("#credit");
  // const userName = document.querySelector("#userName");
  // const userEmail = document.querySelector("#userEmail");

  // userName.innerText = profile.name;
  // userEmail.innerText = profile.email;
  credit.innerText = profile.credits;

  if (profile.avatar) {
    profileImage.src = profile.avatar;
    profileImage.style.objectFit = "cover";
  } else {
    profileImage.src = "/images/Profile-img-placeholder.jpg";
  }
}