import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axiosInitializer from './axios_initializer';
import store from './store';
import App from './components/App';

import '../src/assets/stylesheets/default.css';
import '../src/assets/stylesheets/font-awesome/font-awesome.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-select/dist/react-select.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

axiosInitializer.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('medical-app')
);
