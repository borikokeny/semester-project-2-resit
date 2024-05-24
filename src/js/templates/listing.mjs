import { viewListing } from "../api/listing/view.mjs";

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
  endsAt.innerHTML = listing.endsAt;
  endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
  bids.innerHTML = listing._count.bids;
  bids.textContent = `Current BID: ${bids.innerText}`;
  sellerAvatar.src = listing.avatar ?? `/images/img-placeholder.png`;
  sellerName.innerHTML = listing.seller.name;
  sellerEmail.innerHTML = listing.seller.email;

  const biddingList = listing.bids;
  const bidderInfo = biddingList.map((bidder) => {
  return `${bidder.bidderName} ${bidder.amount} ${bidder.created}`;
  });

  console.log(bidderInfo)

  bidderInfo.forEach(bidderItems => {
   
    const bidderCard = document.createElement("div");
    bidderCard.innerHTML = bidderItems;
    biddersList.append(bidderCard);
  });
}
