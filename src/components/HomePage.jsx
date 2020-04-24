import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import Specials from "./Specials";
import PizzaList from "./PizzaList";

export default function HomePage(props) {
  const { pizzas } = props;

  return (
    <StyledPage>
      <Banner />
      <Specials />
      <PizzaList pizzas={pizzas} />
    </StyledPage>
  )
}

const StyledPage = styled.div`
  width: 1200px;
  max-width: 80%;
  background: red;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;