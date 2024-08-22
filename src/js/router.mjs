import * as listeners from "./handlers/index.mjs";
import { logout } from "./api/auth/logout.mjs";

const path = location.pathname;
logout()
switch (path) {
  case '/profile/login/':
    listeners.setLoginFormListener()
    break;
  case '/profile/register/':
    break;  
  case '/':
    listeners.search()
    break;  
  case '/create/':
    listeners.search()
  case '/profile/':
    listeners.search()
    break;
  case '/listing/':
    listeners.search()
    break;
  case '/listings/':
    listeners.search()
    break;
}
