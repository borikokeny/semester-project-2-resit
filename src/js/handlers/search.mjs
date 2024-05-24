import { viewListings } from "../api/listing/view.mjs";
import { renderListingTemplates } from "../templates/listings.mjs";

export async function search() {
  const listingsToFilter = await viewListings();
  const form = document.querySelector("#searchForm");
  const search = document.querySelector("#search");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const searchValue = search.value.trim();

      if (searchValue === "") {
        searchResults([]);
        return;
      }

      const listingsFiltered = listingsToFilter.filter((listing) => {
        const title = listing.title.toLowerCase();
        const description = listing.description.toLowerCase();

        return title.includes(searchValue) || description.includes(searchValue);
      });

      searchResults(listingsFiltered);
      console.log(listingsFiltered);
    
    });
  }
}

function searchResults(listingsFiltered) {
  const searchContainer = document.querySelector('#search-result'); 
  searchContainer.classList.add('album');
  searchContainer.innerHTML = "";

  if (listingsFiltered.length === 0) {
    return error;
  } else {
    renderListingTemplates(listingsFiltered, searchContainer);
  }
}




