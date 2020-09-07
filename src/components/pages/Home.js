import React, { Fragment, useState } from "react";
import Circle from "../deco/Circle";
import Menu from "./Menu";
import { CapsuleButton } from "../button/CustomButtons";

// Style
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.colors.bg};
`;
const HomeSection = styled.div`
  position: relative;
  height: 100vh;
`;
const HomeFooter = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Home = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const onClickMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Fragment>
      <HomeContainer>
        <HomeSection>
          <Circle />
          <HomeFooter>
            <CapsuleButton
              width="150"
              height="60"
              onClick={() => {
                onClickMenu();
              }}
            >
              MENU
            </CapsuleButton>
          </HomeFooter>
        </HomeSection>
      </HomeContainer>
      <Menu isActive={isMenuActive} />
    </Fragment>
  );
};

export default Home;
