import _ from 'lodash';
import { actions } from 'react-redux-form';
import Timeout from './timeout';
import Api from './../../../apis';
import modifyData from './modifyData';
import initialModelValues from './../../../initialModelValues';

const loadEmptyModel = (dispatch, model) => {
  const modelValue = initialModelValues[model];
  return (
    dispatch(actions.load(`deep.${model}`, modelValue))
  );
};

const loadFromStore = (dispatch, id, model, modelList) => {
  const modelData = _.find(modelList, o => o.id === id);
  if (modelData) {
    return (dispatch(actions.load(`deep.${model}`, modelData)));
  }
};

const canLoadFromStore = (modelList, model) => (
  modelList && modelList.length > 0
);

const fetchFromBackend = (dispatch, model, id, history) => {
  Api.get(model, id)
    .then((response) => {
      const data = modifyData(model, response.data.data[model]);
      return dispatch(actions.load(`deep.${model}`, data));
    }).catch((error) => {
      Timeout(error, dispatch, history);
    });
};

const loadModel = (model, modelList, id, dispatch, history) => {
  if (!id) { return loadEmptyModel(dispatch, model); }

  if (canLoadFromStore(modelList, model)) {
    return loadFromStore(dispatch, id, model, modelList);
  }

  return fetchFromBackend(dispatch, model, id, history);
};

export default loadModel;
