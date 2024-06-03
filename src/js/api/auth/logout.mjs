import { clear } from "../../storage/index.mjs";

export function logout() {
  const logOutButton = document.querySelectorAll("#logOut");

  logOutButton.forEach((btn) =>
    btn.addEventListener("click", () => {
      clear();
      alert("You are logged out");
    })
  );
}


// export function logout() {
//   remove("profile");
//   remove("token")
// }