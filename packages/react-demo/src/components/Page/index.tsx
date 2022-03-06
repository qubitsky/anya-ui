import React from "react";
import styled from "styled-components";

const Page: React.FC<{}> = (props) => {
  return <div {...props} />;
};

export default styled(Page)`
  height: 100%;
  padding: 10px;
`;
