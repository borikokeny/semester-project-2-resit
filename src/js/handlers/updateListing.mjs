import { createListing, updateListing } from "../api/listing/index.mjs";

export async function setUpdateListingFormListener() {
  const form = document.querySelector("#updateListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  
  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const listing = await createListing(id);

    form.title.value = listing.title;
    form.description.value = listing.description;
    form.endsAt.value = listing.endsAt;
    form.media.value = listing.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries())
      listing.id = id;
  
      updateListing(listing)
    })
  }
}