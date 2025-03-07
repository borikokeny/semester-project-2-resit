import { addABid } from "../api/listing/bids.mjs";
import { load } from "../storage/index.mjs";

export function bidListing() {
  const form = document.querySelector("#addBid");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const value = document.querySelector("#addBidInput").value;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
      const isLogedIn = load("profile");

    
      if (isLogedIn) {
        await addABid(+value, id);
        window.location.href = "";
      } else {
        return Error;
      } 
    })
    }
  }
