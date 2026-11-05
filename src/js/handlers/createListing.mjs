import { createListing } from "../api/listing/index.mjs";

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());

    try {
      await createListing(listing);

      alert("Your listing was successfully added!");
      form.reset();

      window.location.href = "/listings/";
    } catch (error) {
      console.error("Listing creation failed:", error);
      alert(error.message);
    }
  });
}
