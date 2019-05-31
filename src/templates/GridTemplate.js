import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const GridTemplate = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default GridTemplate;
