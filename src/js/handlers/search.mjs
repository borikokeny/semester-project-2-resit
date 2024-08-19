import { viewListings } from "../api/listing/view.mjs";
import { renderListingTemplates } from "../templates/listings.mjs";

export async function search() {
  const listingsToFilter = await viewListings();
  const form = document.querySelector("#searchForm");
  const search = document.querySelector("#searchInput");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchValue = search.value.trim().toLowerCase();

      if (searchValue === "") {
        searchResults([]);
        return;
      }

      const listingsFiltered = listingsToFilter.filter((listing) => {
        const title = listing.title.toLowerCase();
        const description = listing.description ? listing.description.toLowerCase() : "";

        return title.includes(searchValue) || description.includes(searchValue);
      });

      searchResults(listingsFiltered);
   });
  }
}

function searchResults(listingsFiltered) {
  const searchContainer = document.querySelector("#searchResult");
  searchContainer.innerHTML = "";

  if (listingsFiltered.length === 0) {
    alert("Sorry, no results for this search");
    return error;
    
  } else {
    renderListingTemplates(listingsFiltered, searchContainer);
  }

  console.log(listingsFiltered);
  console.log("h");
}
