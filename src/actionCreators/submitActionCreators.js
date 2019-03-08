import { pluralize } from './../utils';
import { CREATE_RESPONSE, UPDATE_RESPONSE } from '../actions/types';

export const createRecord = (model, data) => ({
  type: CREATE_RESPONSE,
  payload: {
    model_name: pluralize(model),
    data,
  },
});

export const updateRecord = (model, data) => ({
  type: UPDATE_RESPONSE,
  payload: {
    model_name: pluralize(model),
    data,
  },
});
