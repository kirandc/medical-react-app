import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AppContainer from './../containers/appContainer';
import AppLayoutContainer from './../containers/appLayoutContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AppContainer {...props}>
        <AppLayoutContainer {...props}>
          <Component {...props} />
        </AppLayoutContainer>
      </AppContainer>
    )}
  />
);
export default PrivateRoute;
