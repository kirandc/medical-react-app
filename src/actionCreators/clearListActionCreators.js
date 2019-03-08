import { CLEAR_LIST } from '../actions/types';

const clearList = model => ({
  type: CLEAR_LIST,
  payload: {
    model_name: model,
  },
});

export default clearList;
