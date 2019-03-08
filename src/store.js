import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import reduxMiddleware from 'react-block-ui/reduxMiddleware';

import commonReducer from './reducers/commonReducer';
import notificationReducer from './reducers/notificationReducer';
import initialModelValues from './initialModelValues';


export default createStore(
  combineReducers({
    commonReducer,
    notificationReducer,
    deep: combineForms({
      patient: initialModelValues.patient,
    }, 'deep'),
  }),
  applyMiddleware(reduxMiddleware, thunk),
);
