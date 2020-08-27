import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../deco/Circle";

// Style
import styled from "styled-components";

const HomeContainer = styled.div`
  color: ${(props) => (props.active ? "blue" : "yellow")};
  background: ${(props) => props.theme.colors.bg};
`;

const Ab = styled.div`
  height: 100vh;
`;

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const d = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <HomeContainer active={isActive}>
      <Ab />
      <button onClick={d}>sss</button>
      <h1>Home</h1>
      <Circle />
      <Link to="/test">test</Link>
    </HomeContainer>
  );
};

export default Home;
