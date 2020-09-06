import React, { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../deco/Circle";
import { CapsuleButton } from "../button/CustomButtons";

// Style
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.colors.bg};
`;
const HomeFooter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Circle />
      <HomeFooter>
        <CapsuleButton width="150" height="60">
          MENU
        </CapsuleButton>
      </HomeFooter>
    </HomeContainer>
  );
};

export default Home;
