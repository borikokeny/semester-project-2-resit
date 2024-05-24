import { logout } from "../api/auth/logout.mjs";

export function setLogoutFormListener() {
  const logoutBtn = document.querySelectorAll('.sign-out');
  logoutBtn.forEach((lBtn) =>
  lBtn.addEventListener('click', () => {
    logout()
  }
  ))
}