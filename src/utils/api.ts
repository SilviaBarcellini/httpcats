//import { createElement } from "typescript";

//api data is listed ... every li has a value on the card
export type APICAT = {
  id: number;
  name: number;
  status: string;
  image: string;
  url: string;
};

//get data through API method ... such as bring this data from this address.
//id is the identification of requested data ... such as number of card
//as usual do not forget to return!
export async function getCharacter(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  //SLACK SOLUTION TO ISSUE
  //`https://api.thecatapi.com/v1/images/search?mime_types=gif`,
  //{
  //headers: {
  //"x-api-key": "4ed34816-c19f-4144-9082-b2ffc3df0e40",
  //},
  //}
  //);
  //https://http.cat/${id} error: failed to fetch(storybook)
  const result = (await response.json()) as APICAT;
  const character = {
    imgSrc: result.image,
    name: result.name,
    status: result.status,
  };
  return character;
}
