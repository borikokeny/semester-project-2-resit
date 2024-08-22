import { API_AUCTION_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

 export async function register(name, email, password, avatar) {
 
    const response = await fetch(`${API_AUCTION_URL}/auth/register`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({name, email, password, avatar}),
    });
  
    if (response.ok) {
      alert("You are now registered");
      return await response.json();
    } else {
      alert("Profile already exists! Log in with this one or register a new profile!");
    }
  
    throw new Error("Cannot fetch data");
 }

