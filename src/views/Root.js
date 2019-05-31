import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { createStore } from 'redux';
import ArticlesList from '../components/atoms/ArticlesList';

const initialArticles = {
  articles: [
    'art1', 'art2'
  ]
}



function articles(state = initialArticles, action) {
  switch (action.type) {
    // case 'INCREMENT':
    //   return state + 1
    // case 'DECREMENT':
    //   return state - 1
    default:
      return state
  }
}

const store = createStore(articles)
window.store = store;

const Test = styled.h1`
  text-decoration: underline;
  color: ${props => props.theme.red};
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
      <ArticlesList></ArticlesList>
      <div>
        <h1>Joł, siema!</h1>
        <Test>Elo, tu Styled Components</Test>
        <StyledTest>Rozjebiemy ten Hackathon</StyledTest>
      </div>
    </MainTemplate>
  );
};

export default Root;
