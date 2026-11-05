import { viewProfile, updateProfile } from "../api/profile/index.mjs";
import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (!form) return;

  const savedProfile = load("profile");

  if (!savedProfile?.name) {
    console.log("No logged-in profile found");
    return;
  }

  const { name, email } = savedProfile;

  form.name.value = name;
  form.email.value = email;

  const profile = await viewProfile(name);

  if (form.avatar) {
    form.avatar.src =
      profile.avatar?.url || "/images/Profile-img-placeholder.jpg";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const updatedProfile = Object.fromEntries(formData.entries());

    updatedProfile.name = name;
    updatedProfile.email = email;

    try {
      await updateProfile(updatedProfile);
      window.location.reload();
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  });
}