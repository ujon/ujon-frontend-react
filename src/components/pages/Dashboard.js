import React, { useRef, useEffect, useState } from "react";

// Style
import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  word-wrap: break-word;
  background: ${(props) => props.theme.colors.bg};
`;
const DashboardNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => {
    return `0px 0px 16px 8px ${props.theme.colors.neuShadowDark}`;
  }};
  background: #efefef;
`;
const DashboardNavBody = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & ul {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
  }
  & li {
    margin: 20px;
  }
`;
const DashboardNavFooter = styled.div`
  position: relative;
  & > :first-child {
    margin: 20px;
    float: right;
  }
`;
const DashboardBody = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${(props) => props.leftMargin}px;
  padding: 35px;
  overflow: auto;
`;

const Temp = styled.div`
  display: inline-block;
  margin: 20px;
  width: 100px;
  height: 100px;
  border: 50px;
  box-shadow: 8px 8px 16px #c0c0c0, -8px -8px 16px #ffffff;
  background: #efefef;
`;

const Dashboard = () => {
  const navRef = useRef();
  const [nav, setNav] = useState({
    width: 0,
    height: 0,
  });
  const [isWide, setIsWide] = useState(true);
  useEffect(() => {
    setNav({
      width: navRef.current.offsetWidth,
      height: navRef.current.offsetHeight,
    });
  }, [isWide]);

  const onClickWide = () => {
    console.log("s");
    setIsWide(!isWide);
  };

  return (
    <DashboardContainer>
      <DashboardNav ref={navRef}>
        <DashboardNavBody>
          <ul>
            <li>
              <i className="fas fa-home" />
              {isWide ? "Home" : ""}
            </li>
          </ul>
        </DashboardNavBody>
        <DashboardNavFooter>
          {/* todo: Change to custom arrow */}
          <div onClick={() => onClickWide()}>
            {isWide ? (
              <i className="fas fa-arrow-left" />
            ) : (
              <i className="fas fa-arrow-right" />
            )}
          </div>
        </DashboardNavFooter>
      </DashboardNav>
      <DashboardBody leftMargin={nav.width}>
        <h2>BODY</h2>
        <Temp>temp card</Temp>
      </DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;
