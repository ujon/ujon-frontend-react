import styled, { css } from "styled-components";

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const defaultButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
