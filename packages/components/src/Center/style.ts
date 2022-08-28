import { css } from "styled-components";

export const flexCenterH = css`
  display: flex;
  justify-content: center;
`;

export const flexCenterV = css`
  display: flex;
  align-items: center;
`;

export const flexCenterA = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const textAlignCenter = css`
  text-align: center;
`;

export const marginCenter = css`
  & > * {
    margin: 0 auto;
  }
`;

export const positionCenterH = css`
  position: relative;
  & > * {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const positionCenterV = css`
  position: relative;
  & > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const positionCenterA = css`
  position: relative;
  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const inlineBlockCenter = css`
  text-align: center;
  & > * {
    display: inline-block;
  }
`;
