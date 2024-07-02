import "./router.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";

listeners.hidden()
listeners.setRegisterFormListener()
listeners.setLoginFormListener()
listeners.setCreateListingFormListener()
listeners.setUpdateProfileListener()
templates.renderProfile()
templates.renderSingleListingPage()   
listeners.bidListing()

async function listingsTemplate() {
  const listings = await listingMethods.viewListings();
  const container = document.querySelector("#listings");
  templates.renderListingTemplates(listings, container);
}

listingsTemplate()

