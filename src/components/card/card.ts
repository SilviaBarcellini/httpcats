import { getCharacter, getCharacters } from "../../utils/api";
import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status }) {
  return createElement("article", {
    className: "card",
    children: [
      createElement("img", {
        className: "card_picture",
        src: imgSrc,
        alt: "",
      }),
      createElement("div", {
        className: "card_info",
        children: [
          createElement("h1", {
            className: "status_number",
            innerText: name,
          }),
          createElement("h3", {
            className: "status_name",
            innerText: status,
          }),
        ],
      }),
    ],
  });
}
