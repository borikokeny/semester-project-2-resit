import { register } from "../api/auth/register.mjs";

// console.log("e");
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  
// console.log("eeee");
  if(form) {
    form.addEventListener("submit", async (event) => {
    
      // console.log(event.currentTarget === this);
      event.preventDefault();
    
      const form = event.target;
      const formData = new FormData(form);
      const { name, email, password, avatar } = Object.fromEntries(formData.entries());
      
  
      try {
        await register( name, email, password, avatar );
        location.assign("/profile/login/index.html");
        // console.log("form");
      } catch {
        console.error("error");
      }
    });
  }
}