import _ from 'lodash';
import { actions } from 'react-redux-form';

import Api from './../../../apis';
import Timeout from './timeout';
import modifyData from './modifyData';
import { pluralize } from './../../../utils';
import { addAlert } from '../../../actionCreators/notificationActionCreators';
import { createRecord, updateRecord } from './../../../actionCreators/submitActionCreators';

const setErrorsOnField = (model, errors, dispatch) => {
  _.forEach(errors, (value, key) => {
    const field = `deep.${model}.${key}`;
    const msg = value.join(' and ');

    dispatch(actions.setErrors(field, msg));
  });
};

const getModelApi = (model, params, parent) => {
  const methodApi = params.id ? 'update' : 'create';
  const data = {};
  data[model] = params;

  return Api[methodApi](model, data, parent);
};

const submitRequest = (params, model, data) => (
  params.id ? updateRecord(model, data) : createRecord(model, data)
);

const submitModel = (model, params, dispatch, history, is_modal, parent: null,) => {
  const apiCall = getModelApi(model, params, parent);
  // return value only for modal box, if error don't close modal box
  let promise = apiCall

  promise.then((response) => {
    dispatch({ type: 'REQUEST_DONE' });
    const data = modifyData(model, response.data.data);
    dispatch(actions.reset(`deep.${model}`));
    if(!is_modal){
      history.push(`/${pluralize(model)}`);
    }
    dispatch(addAlert(response.data.message, 'success'));
  })
  .catch((error) => {
    dispatch({ type: 'REQUEST_DONE' });
    if (error.response.status === 401) {
      Timeout(error, dispatch, history);
    } else {
      dispatch(addAlert(`Error in saving ${model}`, 'error'));
      const messages = error.response.data.errors;
      setErrorsOnField(model, messages, dispatch);
    }
  });

  return promise
};

export default submitModel;
