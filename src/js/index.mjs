import "./router.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";

listeners.hidden();
listeners.setRegisterFormListener();
listeners.setLoginFormListener();
listeners.setCreateListingFormListener();
listeners.setUpdateProfileListener();
listeners.bidListing();

// Render profile only on the profile page
if (document.querySelector("#profileImage")) {
  templates.renderProfile();
}

// Render single listing only when an ID exists in the URL
const urlParams = new URLSearchParams(window.location.search);
const listingId = urlParams.get("id");

if (listingId && document.querySelector("#listingImg")) {
  templates.renderSingleListingPage();
}

// All listings
async function listingsTemplate() {
  const container = document.querySelector("#listings");

  if (!container) return;

  const listings = await listingMethods.viewListings();
  templates.renderListingTemplates(listings, container);
}

listingsTemplate();

// Featured listings
async function featureListing() {
  const container = document.querySelector("#featureListing");

  if (!container) return;

  const listings = await listingMethods.viewHighBidListings();
  templates.renderFeaturesListingTemplates(listings, container);
}

featureListing();

// Ending soon listings
async function endingSoonListing() {
  const container = document.querySelector("#endingSoon");

  if (!container) return;

  const listings = await listingMethods.endingSoonListings();
  templates.renderEndingSoonListingTemplates(listings, container);
}

endingSoonListing();
