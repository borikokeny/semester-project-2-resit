import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
 
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData.entries());

      try {
        await login(email, password);
        location.assign("/listings");
      } catch {
        console.log("error");
      }
    });
  }
}