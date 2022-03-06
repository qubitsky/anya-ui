import React from 'react';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  > * {
    flex: 0 0 auto;
  }
`;