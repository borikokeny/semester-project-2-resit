import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";

const path = location.pathname;

switch (path) {
  case '/profile/login/':
    listeners.setLoginFormListener()
    break;
  case '/profile/register/':
    listeners.setRegisterFormListener()
    break;  
  case '/':
    listeners.search()
    listeners.setLogoutFormListener()
    break;  
  case '/profile/':
    listeners.search()
    templates.renderProfile()
    listeners.setUpdateProfileListener()
    listeners.setCreateListingFormListener()
    break;
  case '/listing/edit/':
    listeners.setUpdateListingFormListener()
    break;
  case '/listing/':
    templates.renderSingleListingPage()
    listeners.bidListing()
    break;
  case '/listings/':
    listeners.search()
    break;
}
