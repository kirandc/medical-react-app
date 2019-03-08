import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Patient from '../containers/patients/Index';
import PatientCreate from '../containers/patients/Create';
import PatientShow from '../containers/patients/Show';
import PageNotFound from './PageNotFound';


const routes = [
  { path: '/', component: Patient},
  { path: '/patients', component: Patient},
  { path: '/patients/new', component: PatientCreate},
  { path: '/patient/:id', component: PatientShow},
]

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
	      <PrivateRoute
	        key={i}
	        strict
	        exact
	        path={route.path}
	        allowed={route.allowed}
	        component={route.component}
	      />
    	))}
      <Route exact component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
