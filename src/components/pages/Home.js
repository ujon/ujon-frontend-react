import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../deco/Circle";

// Style
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  /* color: ${(props) => (props.active ? "blue" : "yellow")}; */
  background: ${(props) => props.theme.colors.bg};
`;
const HomeFooter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const d = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <HomeContainer active={isActive}>
      <button onClick={d}>sss</button>
      <h1>Home</h1>
      <Circle />
      <HomeFooter>
        <Link to="/test">test</Link>
      </HomeFooter>
    </HomeContainer>
  );
};

export default Home;
