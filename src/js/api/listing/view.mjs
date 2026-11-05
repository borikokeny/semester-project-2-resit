// import { API_AUCTION_URL } from "../constants.mjs";
// import { headers } from "../headers.mjs";

// const action = "/listings";

// export async function viewListings() {
//   try {
//     const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=created`, {
//       method: "GET",
//       headers: headers(),
//     });
    
//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error(response.statusText);
//     }
//   } catch (error) {
//     throw new Error("Cannot fetch data");
//   }  
// }

// export async function viewHighBidListings() {
//   try {
//     const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=endsAt&sortOrder=desc&limit=3`, {
//       method: "GET",
//       headers: headers(),
//     });
    
//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error(response.statusText);
//     }
//   } catch (error) {
//     throw new Error("Cannot fetch data");
//   } 
// }

// export async function endingSoonListings() {
//   try {
//     const response = await fetch(`${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=tags&sortOrder=asc&limit=3`, {
//       method: "GET",
//       headers: headers(),
//     });
    
//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error(response.statusText);
//     }
//   } catch (error) {
//     throw new Error("Cannot fetch data");
//   } 
// }

// export async function viewListing(id) {
//   if (!id) {
//     throw new Error("Get needs a post ID")
//   }
//   const response = await fetch(`${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`, {
//     method: "GET",
//     headers: headers(),
//   });
  
//     return await response.json();
//   }


import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";

export async function viewListings() {
  const response = await fetch(
    `${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=created`,
    {
      method: "GET",
      headers: headers(),
    }
  );

  if (!response.ok) {
    throw new Error(`Cannot fetch listings: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function viewHighBidListings() {
  const response = await fetch(
    `${API_AUCTION_URL}${action}?_seller=true&_bids=true&limit=3`,
    {
      method: "GET",
      headers: headers(),
    }
  );

  if (!response.ok) {
    throw new Error(`Cannot fetch listings: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function endingSoonListings() {
  const response = await fetch(
    `${API_AUCTION_URL}${action}?_seller=true&_bids=true&_active=true&sort=endsAt&sortOrder=asc&limit=3`,
    {
      method: "GET",
      headers: headers(),
    }
  );

  if (!response.ok) {
    throw new Error(`Cannot fetch listings: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function viewListing(id) {
  if (!id) {
    throw new Error("Get needs a post ID");
  }

  const response = await fetch(
    `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`,
    {
      method: "GET",
      headers: headers(),
    }
  );

  if (!response.ok) {
    throw new Error(`Cannot fetch listing: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}
