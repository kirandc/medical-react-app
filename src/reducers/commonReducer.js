/* eslint-disable camelcase */
import * as actionType from './../actions/types';

const initialState = {
  patients: [],
  total_count: 0
};

const commonReducer = (state = initialState, action) => {
  const newState = {};
  const { model_name, data } = (action.payload || {});

  switch (action.type) {
    case actionType.CREATE_RESPONSE:
      newState[model_name] = [...state[model_name], data];
      return Object.assign({}, state, newState);
    case actionType.UPDATE_RESPONSE:
      newState[model_name] = state[model_name].map((m) => {
        if (m.id === data.id) { return data; }
        return m;
      });
      return Object.assign({}, state, { ...newState });
    case actionType.LIST_RESPONSE:
      newState[action.payload.model_name] = action.payload.data;
      newState['total_count'] = action.payload.total_count;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default commonReducer;
