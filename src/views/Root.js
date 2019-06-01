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
import Navigation from 'components/organisms/Navigation';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import reducer from '../reducers/articleReducer';
import HighFake from './HighFake';
import MediumFake from './MediumFake';
import LowFake from './LowFake';
import ArticlesList from 'components/atoms/ArticlesList';

  
const store = createStore(
    reducer,
  applyMiddleware(thunk, logger)
)
const Root = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <>
          <ArticlesList></ArticlesList>
          <Navigation />
          <Switch>
            <Route exact path={routes.highFake} component={HighFake} />
            <Route exact path={routes.mediumFake} component={MediumFake} />
            <Route exact path={routes.lowFake} component={LowFake} />
          </Switch>
        </>
      </MainTemplate>
    </BrowserRouter>
    </Provider>
  );
};

export default Root;
