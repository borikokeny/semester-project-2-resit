import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  
  if(form) {
    form.addEventListener("submit", async (event) => {
    
      event.preventDefault();
    
      const form = event.target;
      const formData = new FormData(form);
      const { name, email, password, avatar } = Object.fromEntries(formData.entries());
  
      try {
        await register( name, email, password, avatar );
        location.assign("/profile/login/index.html");
      } catch {
        console.error("error");
      }
    });
  }
}