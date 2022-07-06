import { useState } from "react";
const data = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Pear",
  "Pineapple",
  "Coconut",
  "Mango",
  "Lemon",
  "Lime",
  "Cherry",
  "Clementine",
  "Grapefruit",
  "Kumquat",
  "Tangerine",
  "Pomegranate",
  "Watermelon",
];

export const useHooks = () => {
  const groceries = data;
  const [basket, setBasket] = useState({});

  return { groceries, basket, setBasket };
};
