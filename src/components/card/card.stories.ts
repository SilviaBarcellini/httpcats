import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { character, getCharacter, getCharacters } from "../../utils/api";

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
  const cats: character[] = [
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

//CALL FUNCTION: GET SINGLE CHARACTER
//export const CatFromAPI = (args, { loaded: { cat } }) => {
type CatFromAPIProps = {
  loaded: {
    character: character;
  };
};
export const CatFromAPI = (
  args,
  { loaded: { character } }: CatFromAPIProps
) => {
  return createCard(character);
};

CatFromAPI.loaders = [
  async () => ({
    cat: await getCharacter(999),
  }),
];

//CALL FUNCTION: GET MULTIPLE CHARACTERS + MAP RESULTS IN A CONTAINER
type CatsFromAPIProps = {
  loaded: {
    characters: character[];
  };
};
export const CatsFromAPI = (
  args,
  { loaded: { characters } }: CatsFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    children: characters.map((cat) => createCard(cat)),
  });
  return container;
};
CatsFromAPI.loaders = [
  async () => ({
    cats: await getCharacters(),
  }),
];

//RANDOM CHARACTER!!! LINE 64 + 84 CANNOT EXIST IF RANDOM EXISTS
export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    className: "button",
    innerText: "Get your daily random cat 😻",
    onclick: async () => {
      // generate random character id
      //mathfloor=no commas + mathrandom 0-1->0-670 +1 in case i do not want any zero
      const randomCharacterId = Math.floor(Math.random() * 670) + 1;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // getCharacter from API
      const randomCharacter = await getCharacter(randomCharacterId);
      // create card-> the character will land in a card
      const randomCharacterCard = createCard(randomCharacter);
      // make sure to only display one character
      //length=max characters displayed in the container
      //removechild= when i click random the last selected character will replace the previous selected one
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      // append card->the card will be stored inside the container as child
      container.append(randomCharacterCard);
      // feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    children: [randomButton],
  });
  return container;
};
