import React from "react";
import styled from "styled-components";

import PizzaCard from "./PizzaCard";

export default function PizzaList(props) {
  const { pizzas } = props;
  return (
    <StyledList>
      {pizzas.map(pizza => {
        return <PizzaCard key={pizza.id} pizza={pizza} />
      })}
    </StyledList>
  )
}
const StyledList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`;