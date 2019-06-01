import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import configStore from '../store/configStore';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import reducer from '../reducers/articleReducer';

// import { createStore } from 'redux';
import ArticlesList from '../components/atoms/ArticlesList';


// const initialArticles = {
//   articles: [
//     'art1', 'art2'
//   ]
// }

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

// function articles(state = initialArticles, action) {
//   switch (action.type) {
//     // case 'INCREMENT':
//     //   return state + 1
//     // case 'DECREMENT':
//     //   return state - 1
//     default:
//       return state
//   }
// }

// const store = configStore();
// window.store = store;

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
    <Provider store = {store}>
      <MainTemplate>
        <div>
          console.log(fetchArticles());
        <ArticlesList></ArticlesList>
          <h1>Joł, siema!</h1>
          <Test>Elo, tu Styled Components</Test>
          <StyledTest>Rozjebiemy ten Hackathon</StyledTest>
        </div>
      </MainTemplate>
    </Provider>
  );
};

export default Root;
