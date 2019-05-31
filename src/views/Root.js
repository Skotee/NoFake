import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';

const Test = styled.h1`
  text-decoration: underline;
  color: ${({ theme }) => theme.red};
`;

const StyledTest = styled(Test)`
  letter-spacing: 10px;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-decoration: none;
`;

const Root = () => {
  return (
    <MainTemplate>
      <div>
        <h1>Joł, siema!</h1>
        <Test>Elo, tu Styled Components</Test>
        <StyledTest>Rozjebiemy ten Hackathon</StyledTest>
      </div>
    </MainTemplate>
  );
};

export default Root;
