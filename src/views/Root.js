import React from 'react';
// import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import Navigation from 'components/organisms/Navigation';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import HighFake from './HighFake';
import MediumFake from './MediumFake';
import LowFake from './LowFake';

// const Test = styled.h1`
//   text-decoration: underline;
//   color: ${props => props.theme.red};
// `;

// const StyledTest = styled(Test)`
//   letter-spacing: 10px;
//   font-weight: ${({ theme }) => theme.regular};
//   font-size: ${({ theme }) => theme.fontSize.xl};
//   text-decoration: none;
// `;

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
