import styled from "styled-components";
import {
  flexCenterA,
  flexCenterH,
  flexCenterV,
  gridCenter,
  inlineBlockCenter,
  marginCenter,
  positionCenterA,
  positionCenterH,
  positionCenterV,
  textAlignCenter,
} from "./style";
import { ICenter, ECenterDirection, ECenterUse } from "./types";

const flexCenterMap = {
  [ECenterDirection.horizontal]: flexCenterH,
  [ECenterDirection.vertical]: flexCenterV,
  [ECenterDirection.all]: flexCenterA,
};
const positionCenterMap = {
  [ECenterDirection.horizontal]: positionCenterH,
  [ECenterDirection.vertical]: positionCenterV,
  [ECenterDirection.all]: positionCenterA,
};

export default styled.div<ICenter>`
  ${({ use = ECenterUse.flex, direction = ECenterDirection.all }) => {
    switch (use) {
      case ECenterUse.flex:
        return flexCenterMap[direction];
      case ECenterUse.position:
        return positionCenterMap[direction];
      case ECenterUse.grid:
        return gridCenter;
      case ECenterUse.inlineBlock:
        return inlineBlockCenter;
      case ECenterUse.textAlign:
        return textAlignCenter;
      case ECenterUse.margin:
        return marginCenter;
    }
  }};
`;
