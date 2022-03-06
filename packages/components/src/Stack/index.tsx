import styled from "styled-components";
import React from "react";

const Stack: React.FC<{
  className?: string;
}> = ({ className, ...props }) => {
  return <div className={className} {...props} />;
};

export default styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  --space: 1.5em;
  > * + * {
    margin-top: var(--space);
  }
`;
