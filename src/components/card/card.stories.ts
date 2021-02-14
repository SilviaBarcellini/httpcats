import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const cat100 = () =>
  createCard({
    imgSrc: "https://http.cat/100",
    name: "100",
    status: "continue",
  });

export const cat101 = () =>
  createCard({
    imgSrc: "https://http.cat/101",
    name: "101",
    status: "switching protocols",
  });

export const cat102 = () =>
  createCard({
    imgSrc: "https://http.cat/102",
    name: "102",
    status: "processing",
  });

export const multiple = () => {
  const cats = [
    {
      imgSrc: "https://http.cat/100",
      name: "100",
      status: "continue",
    },
    {
      imgSrc: "https://http.cat/101",
      name: "101",
      status: "switch protocols",
    },
    {
      imgSrc: "https://http.cat/102",
      name: "102",
      status: "processing",
    },
  ];
  //ERROR IN STORYBOOK Expecting an HTML snippet or DOM node from the story: "Multiple" of "Components/Card".
  //Did you forget to return the HTML snippet from the story?
  //Use "() => <your snippet or node>" or when defining the story.
  //AKA: you need to create a "landing" container. The children of such container will be the cards
  // mapped inside the container
  //do not forget to return the container, duh!
  const container = createElement("div", {
    className: "container",
    children: cats.map((cat) => createCard(cat)),
  });
  return container;
};

export const CatFromAPI = (args, { loaded: { cat } }) => {
  return createCard(cat);
};

CatFromAPI.loaders = [
  async () => ({
    cat: await getCharacter(300),
  }),
];
