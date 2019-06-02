import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Wrapper = styled.div`
  padding: 25px 100px 25px calc(100px + 100px);
  /* + padding z lewej tyle co nawigacja */
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
