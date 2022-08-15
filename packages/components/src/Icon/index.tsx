import styled, { CSSProperties } from "styled-components";
import React from "react";

interface IIconProps {
  className?: string;
  size?: number | string;
  style?: CSSProperties;
}

const Icon: React.FC<IIconProps> = ({ className, size, style, ...props }) => {
  if (typeof size === "number") {
    style = {
      width: size,
      height: size,
      ...style,
    };
  }
  return <i className={className} style={style} {...props} />;
};

export default styled(Icon)`
  display: inline-block;
  width: 1em;
  height: 1em;
  svg {
    width: 100%;
    height: 100%;
  }
`;
