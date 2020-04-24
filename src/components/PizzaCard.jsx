import React from "react";
import styled from "styled-components";

export default function PizzaCard(props) {
  const { name, size, sauce, special, toppings } = props.pizza;
  return (
    <StyledCard>
      <h3>{name}</h3>
      <h4>Size: {size}</h4>
      <h4>Sauce: {sauce}</h4>
      <h4>Toppings: {
        toppings.map(x => {
          return `${x}, `;
        })
      }</h4>
      <h4>Special Instructions: {special}</h4>
    </StyledCard>
  )
}
const StyledCard = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: .8rem;
  }
`;