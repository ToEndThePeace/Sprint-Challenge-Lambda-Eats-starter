import React from "react";
import styled from "styled-components";

import PizzaList from "./PizzaList";

const currentSpecials = [
  {
    id: 1,
    name: "Margherita Pizza",
    size: "large",
    sauce: "marinara",
    special: "add tomato and basil",
    toppings: []
  },
  {
    id: 2,
    name: "BBQ Bacon Pizza",
    size: "medium",
    sauce: "bbq",
    special: "add chicken",
    toppings: ["isg", "bcn"]
  },
  {
    id: 3,
    name: "Alfredo Pizza",
    size: "small",
    sauce: "garlic",
    special: "",
    toppings: ["isg", "bac", "olv"]
  }
]

export default function Specials(props) {
  return (
    <PizzaList pizzas={currentSpecials} />
  )
}

const StyledSpecials = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px;
`;