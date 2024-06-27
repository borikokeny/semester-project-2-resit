import { load } from "../storage/index.mjs";

export function headers() {
  // const headers = new Headers();
  const token = load("token");

  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    // headers.append("Authorization", `Bearer ${token}`);
  } else {
    return {
      "Content-Type": "application/json",
    };
  }


  // if (hasBody) {
  //   headers.append("Content-Type", "application/json");
  // }

  // return headers;
}





// import { load } from "../storage/index.mjs";

// export function headers() {
//   const token = load("token");

//   if (token) {
//     return {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     };
//   } else {
//     return {
//       "Content-Type": "application/json",
//     };
//   }
// }