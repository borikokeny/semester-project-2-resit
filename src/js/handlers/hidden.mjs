import { load } from "../storage/index.mjs";

export function hidden() {
  const registeredUser = load("profile");

  const hiddenButtons = document.querySelectorAll("[data-hidden]");

  for (const buttons of hiddenButtons) {
    const mustBeHidden = buttons.dataset.hidden;

    // if (mustBeHidden === "registeredUser" && registeredUser) {
    //   buttons.style.display = "block";
    // } else {
    //   buttons.style.display = "none";
    // }


    if ((mustBeHidden === "registeredUser" && registeredUser)  || (mustBeHidden === "unregisteredUser" && !registeredUser)) {
      buttons.style.display = "none";
    } else {
      buttons.style.display = "block";
    }
  }
}















// import { logout } from "../api/auth/logout.mjs";


// const token = localStorage.getItem("token");
// const logoutButton = document.querySelector("#logOut");
// const signUpButton = document.querySelector("#signUp");
// const profileButton = document.querySelector("#myPage");
// const createButton = document.querySelector("#createPage");
// console.log("s");

// if (token) {
//   signUpButton.style.display = "none";
  
// } else {
//   signUpButton.style.display = "block";
// }

// logout();