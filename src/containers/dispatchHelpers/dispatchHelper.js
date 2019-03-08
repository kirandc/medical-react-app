import { actions } from 'react-redux-form';
import * as modelHelper from './modelHelpers/modelHelpers';
import { pluralize } from '../../utils';
import { addAlert } from '../../actionCreators/notificationActionCreators';

export default function mapDispatchToProps(dispatch) {
  return {
    dispalyForm(model, obj){
      dispatch(actions.change(`deep.${model}`, obj))
    },

    load(model, list, id) {
      modelHelper.loadModel(model, list, id, dispatch, this.history);
    },

    setTouched(model) {
      return dispatch(actions.setTouched(`deep.${model}`));
    },

    fetch(model, params = null) {
      dispatch({ type: 'REQUEST_START' });
      modelHelper.fetchModel(model, dispatch, this.history, params);
    },

    setValid(field) {
      dispatch(actions.setErrors(field, false));
    },

    submit(model, params, is_modal = false) {
      dispatch({ type: 'REQUEST_START' });
      return modelHelper.submitModel(model, params, dispatch, this.history, is_modal);
    },

    reset(model) {
      return dispatch(actions.reset(`deep.${model}`));
    },

    handleCancel(model, history) {
      dispatch(actions.reset(`deep.${model}`));
      history.push(`/${pluralize(model)}`);
    },

    fetchByUrl(url, collection, parmas = null){
      modelHelper.fetchByUrlModel(url, collection, dispatch, parmas);
    },
  };
}
