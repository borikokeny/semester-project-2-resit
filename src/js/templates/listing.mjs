import { viewListing } from "../api/listing/view.mjs";
import { renderBidderTemplate } from "./bidders.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await viewListing(id);

  const img = document.querySelector("#listingImg");
  const title = document.querySelector("#listingTitle");
  const description = document.querySelector("#listingDescription");
  const endsAt = document.querySelector("#listingEndsAt");
  const bids = document.querySelector("#listingBids");
  const bidsContainer = document.querySelector("#bidsContainer");
  const sellerAvatar = document.querySelector("#sellerAvatar");
  const sellerName = document.querySelector("#sellerInfo");
  const sellerEmail = document.querySelector("#sellerEmail");
  const biddersList = document.querySelector("#bidderName");

  document.title = listing.title;
  img.src = listing.media[0] ?? `/images/img-placeholder.png`;
  title.innerHTML = listing.title;
  description.innerHTML = listing.description;

  if(listing.endsAt) {
    const endsAtDate = document.querySelector("#listingEndsAt");

    const today = new Date();
    const timeLeft = new Date(listing.endsAt);

    const timeCounter = timeLeft - today;
    const secondsToDate = Math.floor((timeCounter % (1000 * 60)) / (1000));
    const minutesToDate = Math.floor((timeCounter % (1000 * 60 * 60)) / (1000 * 60));
    const hoursToDate = Math.floor((timeCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const daysCount = Math.ceil(timeCounter / (1000 * 60 * 60 * 24));

    endsAtDate.classList.add("mt-5");

    endsAtDate.innerText = `Closes in ${daysCount} days ${hoursToDate} hours ${minutesToDate} minutes ${secondsToDate} seconds`;

    description.append(endsAtDate);
  }

  bids.innerHTML = listing._count.bids;
  bids.textContent = `Number of BIDs: ${bids.innerText}`;
  sellerAvatar.src = listing.avatar ?? `/images/img-placeholder.png`;
  sellerName.innerHTML = listing.seller.name;
  sellerEmail.innerHTML = listing.seller.email;

  if (listing.bids){
    renderBidderTemplate(listing.bids, biddersList);
  }
}
