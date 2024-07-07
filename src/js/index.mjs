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
  const listings = await listingMethods.viewHighBidListings();
  const container = document.querySelector("#featureListing");
  templates.renderFeaturesListingTemplates(listings, container);
}

featureListing()

async function endingSoonListing() {
  const listings = await listingMethods.endingSoonListings();
  const container = document.querySelector("#endingSoon");
  templates.renderEndingSoonListingTemplates(listings, container);
}

endingSoonListing()

(function (d) {
  var w = d.documentElement.offsetWidth,
      t = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT),
      b;
  while (t.nextNode()) {
      b = t.currentNode.getBoundingClientRect();
      if (b.right > w || b.left < 0) {
          t.currentNode.style.setProperty('outline', '1px dotted red', 'important');
          console.log(t.currentNode);
      }
  };
}(document));