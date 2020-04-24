import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import pizzaPic from "../Assets/Pizza.jpg";

export default function Banner(props) {
  const { path, url } = useRouteMatch();
  return (
    <StyledBanner>
      <img src={pizzaPic} alt="A delicious pizza" />
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;