import { viewProfile, updateProfile } from "../api/profile/index.mjs"
import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name = name;
    form.email= email;

    const button = form.querySelector("button");
    const profile = await viewProfile(name);
    form.avatar.src = profile.avatar;

    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);  
      const profile = Object.fromEntries(formData.entries())

      profile.name = name;
      profile.email = email;

      try {
        await updateProfile(profile);
        window.location.href = "";
      } catch {
        console.log("error");
      }
      });
    }
}