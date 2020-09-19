import React, { useState } from "react";

// Style
import styled from "styled-components";
import { StyledLink } from "../../theme/globalComponent";

const MenuContainer = styled.div`
  background: ${(props) => props.theme.colors.bg};
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${(props) => (props.active ? "100vh" : "0vh")};
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.active ? 1 : 0)};
  box-shadow: ${(props) =>
    props.active ? `0 -5px 100px 30px ${props.theme.colors.bg}` : "none"};
  transition: all ease 0.7s;
`;
const MenuBodyContainer = styled.div``;
const MenuBody = styled.div`
  flex-grow: 1;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & ul {
    list-style: none;
    display: inline-block;
  }

  & li {
    display: block;
    margin-bottom: 20px;
  }

  & li > ${StyledLink} {
    text-decoration: none;
    color: ${(props) => props.theme.colors.bgShadow};
    font-size: 8vw;
    text-transform: uppercase;
    letter-spacing: 10px;

    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

const menuLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/test",
    name: "Test",
  },
];

const Menu = (props) => {
  return (
    <MenuContainer active={props.isActive}>
      <MenuBody>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <StyledLink to={link.path}>{link.name}</StyledLink>
            </li>
          ))}
        </ul>
      </MenuBody>
    </MenuContainer>
  );
};

export default Menu;
