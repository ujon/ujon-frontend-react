import React, { useState } from "react";
import PropTypes from "prop-types";

// Style
import styled from "styled-components";
import { defaultButtonStyle } from "../../theme/globalMixin";

const RectangleButtonContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) => {
    if (props.active) {
      return "inset 0 8px 16px #c0c0c0, inset 0 -8px 16px #ffffff";
    }
  }};
  color: ${(props) => {
    return props.active
      ? props.activeColor || props.theme.colors.bgShadow
      : props.color || props.theme.colors.black;
  }};
`;

const RectangleButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <RectangleButtonContainer
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
      padding={props.padding}
      activeColor={props.activeColor}
      active={isActive}
      onClick={() => {
        props.onClick();
        onClick();
      }}
    >
      {props.children}
    </RectangleButtonContainer>
  );
};
RectangleButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
};
RectangleButton.defaultProps = {
  borderRadius: "15px",
  padding: "20px",
  onClick: () => {},
};

export default RectangleButton;
