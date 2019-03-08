import * as actionType from './../actions/types';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.ADD_ALERT:
      return ({
        text: action.text,
        style: action.style,
      });
    case actionType.REMOVE_ALERT:
      return ({
        text: '',
      });
    default:
      return state;
  }
};

export default notificationReducer;
