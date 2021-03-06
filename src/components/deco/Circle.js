import React, { useRef } from "react";
import { useMousePosition } from "../../utils/customHook";

// Style
import styled from "styled-components";
import { absoluteCenter } from "../../theme/globalMixin";

const CircleContainer = styled.div`
  ${absoluteCenter}
  transform-origin: center center;
`;
const CircleOutter = styled.div`
  ${absoluteCenter}
  width: 60vh;
  height: 60vh;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.bg};
  box-shadow: inset 10px 0 20px ${(props) => props.theme.colors.bgShadow};
`;
const CircleInner = styled.div`
  ${absoluteCenter}
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.bg};
  box-shadow: 10px 0 20px ${(props) => props.theme.colors.bgShadow};
`;
// Style End

const Circle = () => {
  const position = useMousePosition();
  const container = useRef();
  const outer = useRef();
  const inner = useRef();

  if (container.current && outer.current && inner.current) {
    // Handle rotation
    let circle = container.current.getBoundingClientRect();
    let diffX = -(circle.x - position.x);
    let diffY = circle.y - position.y;
    let tan = diffY / diffX;
    let deg = (Math.atan(tan) * 180) / Math.PI;
    if (diffX < 0) {
      deg += 180;
    } else if (diffX > 0 && diffX < 0) {
      deg += 360;
    }
    container.current.style.transform = `rotate(${-deg}deg)`;
    // Handle opacity
    let distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    let radiousOuter = outer.current.offsetHeight / 2;
    let radiousInner = inner.current.offsetHeight / 2;
    let opacity = 1;
    if (distance < radiousOuter) {
      opacity = (distance - radiousInner) / (radiousOuter - radiousInner);
    }
    outer.current.style.opacity = opacity;
    inner.current.style.opacity = opacity;
  }

  return (
    <CircleContainer ref={container}>
      <CircleOutter ref={outer} />
      <CircleInner ref={inner} />
    </CircleContainer>
  );
};

export default Circle;
