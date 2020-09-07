import React, { useState } from "react";
import PropTypes from "prop-types";

// Style
import styled from "styled-components";

const CapsuleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  box-shadow: ${(props) => {
    if (props.active) {
      return "inset 0 8px 16px #c0c0c0, inset 0 -8px 16px #ffffff";
    } else {
      return "0 8px 16px #c0c0c0, 0 -8px 16px #ffffff";
    }
  }};
  color: ${(props) => {
    return props.active
      ? props.activeColor || props.theme.colors.bgShadow
      : props.color || props.theme.colors.black;
  }};
`;

const CapsuleButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <CapsuleButtonContainer
      width={props.width}
      height={props.height}
      color={props.color}
      activeColor={props.activeColor}
      active={isActive}
      onClick={() => {
        props.onClick();
        onClick();
      }}
    >
      {props.children}
    </CapsuleButtonContainer>
  );
};

CapsuleButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  onClick: PropTypes.func,
};
CapsuleButton.defaultProps = {
  width: "100px",
  height: "50px",
  onClick: () => {},
};

export default CapsuleButton;
