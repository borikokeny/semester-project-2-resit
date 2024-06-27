import { createListing } from "../api/listing/index.mjs";

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");
  
  if (form) {
    form.addEventListener("submit", (event) => {
      // console.log("f");
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries())
  
      createListing(listing)
      alert("Your listing was successfully added");
    })
  }
}