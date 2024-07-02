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

async function featureListing() {
  const listingsa = await listingMethods.viewHighBidListings();
  const containera = document.querySelector("#featureListing");
  templates.renderFeaturesListingTemplates(listingsa, containera);
}

featureListing()

async function endingSoonListing() {
  const listingso = await listingMethods.endingSoonListings();
  const containero = document.querySelector("#endingSoon");
  templates.renderEndingSoonListingTemplates(listingso, containero);
}

endingSoonListing()
