import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Patient from '../containers/patients/Index';
import PatientCreate from '../containers/patients/Create';
import PatientShow from '../containers/patients/Show';
import Prescription from '../containers/prescriptions/Index';
import PrescriptionCreate from '../containers/prescriptions/Create';
import PrescriptionShow from '../containers/prescriptions/Show';
import PageNotFound from './PageNotFound';


const routes = [
  { path: '/', component: Patient},
  { path: '/patients', component: Patient},
  { path: '/patients/new', component: PatientCreate},
  { path: '/patients/:id', component: PatientShow},
  { path: '/patients/:id/prescriptions', component: Prescription},
  { path: '/patients/:patient_id/prescriptions/new', component: PrescriptionCreate},
  { path: '/patients/:patient_id/prescriptions/:id', component: PrescriptionShow},
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
