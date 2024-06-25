import { viewListings } from "../api/listing/view.mjs";
// import { getSearchedListings } from "../api/listing/search.mjs";
import { renderListingTemplates } from "../templates/listings.mjs";

export async function search() {
  const listingsToFilter = await viewListings();
  const form = document.querySelector("#searchForm");
  const search = document.querySelector("#searchInput");

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
    return error;
  } else {
    renderListingTemplates(listingsFiltered, searchContainer);
  }
}





// export async function search() {
//   const listingsToFilter = await viewListings();
//   const form = document.querySelector("#searchForm");
  
//   // const search = document.querySelector("input[type=search]");

//   if (form) {
//     form.addEventListener("submit", handlerSearch);
//   } 
// }

//   function searchResults(listingsFiltered) {
//     const searchContainer = document.querySelector("searchResult");

//     searchContainer.innerHTML = "";
//     if (listingsFiltered.length === 0) {
//       return error;
//     } else {
//       renderListingTemplates(listingsFiltered, searchContainer);
//     }
//   }

//   async function handlerSearch(e) {
//     const search = document.querySelector("#searchInput");

//     e.preventDefault();

//     const searchValue = search.value.trim();
//     let listingsToFilter;
//     if (searchValue === "") {
//       listingsToFilter = await viewListings();
//     } else {
//       listingsToFilter = await getSearchedListings(searchValue);
//     }

//     const listingsFiltered = listingsToFilter.filter((listing) => {

//       const title = listing.title.toLowerCase();

//       return (
//         (title.includes(searchValue))
//       );
//     });

//     searchResults(listingsFiltered);
//     console.log(listingsFiltered);
//   }
 


    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const searchValue = search.value.trim();

    //   if (searchValue === "") {
    //     searchResults([]);
    //     return;
    //   }

    //   const listingsFiltered = listingsToFilter.filter((listing) => {
    //     const title = listing.title.toLowerCase();
    //     const description = listing.description.toLowerCase();

    //     return title.includes(searchValue) || description.includes(searchValue);
    //   });

    //   searchResults(listingsFiltered);
    //   console.log(listingsFiltered);
    
    // });
//   }
// }

// function searchResults(listingsFiltered) {
//   const searchContainer = document.querySelector('#search-result'); 
//   searchContainer.classList.add('album');
//   searchContainer.innerHTML = "";

//   if (listingsFiltered.length === 0) {
//     return error;
//   } else {
//     renderListingTemplates(listingsFiltered, searchContainer);
//   }
// }



// import { viewListings } from "../api/listing/view.mjs";
// import { renderListingTemplates } from "../templates/listings.mjs";

// export async function search() {
//   const listingsToFilter = await viewListings();
//   const form = document.querySelector("#searchForm");
//   // const search = document.querySelector("input[type=search]");

//   if (form) {
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const searchValue = search.value.trim();

//       if (searchValue === "") {
//         searchResults([]);
//         return;
//       }

//       const listingsFiltered = listingsToFilter.filter((listing) => {
//         const title = listing.title.toLowerCase();
//         const description = listing.description.toLowerCase();

//         return title.includes(searchValue) || description.includes(searchValue);
//       });

//       searchResults(listingsFiltered);
//       console.log(listingsFiltered);
    
//     });
//   }
// }

// function searchResults(listingsFiltered) {
//   const searchContainer = document.querySelector('#search-result'); 
//   searchContainer.classList.add('album');
//   searchContainer.innerHTML = "";

//   if (listingsFiltered.length === 0) {
//     return error;
//   } else {
//     renderListingTemplates(listingsFiltered, searchContainer);
//   }
// }





