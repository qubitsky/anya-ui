import styled from "styled-components";

export default styled.div`
  --n: 1;
  --d: 1;
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;

  > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
