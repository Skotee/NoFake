import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Navigation from 'components/organisms/Navigation';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import HighFake from './HighFake';
import MediumFake from './MediumFake';
import LowFake from './LowFake';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <>
          <Navigation />
          <Switch>
            <Route exact path={routes.highFake} component={HighFake} />
            <Route exact path={routes.mediumFake} component={MediumFake} />
            <Route exact path={routes.lowFake} component={LowFake} />
          </Switch>
        </>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
