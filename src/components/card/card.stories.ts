import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";

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
