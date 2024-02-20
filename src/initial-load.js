import { home } from "./home";

let content = document.getElementById("content");

export function initialize() {
  content.appendChild(home());
}
