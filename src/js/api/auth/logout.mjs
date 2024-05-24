import { remove } from "../../storage/index.mjs";

export function logout() {
  remove("profile");
  remove("token")
}