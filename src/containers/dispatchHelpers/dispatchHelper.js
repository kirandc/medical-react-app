import { actions } from 'react-redux-form';
import * as modelHelper from './modelHelpers/modelHelpers';
import { pluralize } from '../../utils';
import { addAlert } from '../../actionCreators/notificationActionCreators';
import _ from 'lodash';

export default function mapDispatchToProps(dispatch) {
  return {
    dispalyForm(model, obj){
      dispatch(actions.change(`deep.${model}`, obj))
    },

    load(model, list, id, params: null, parent = null) {
      modelHelper.loadModel(model, list, id, params: null, dispatch, this.history, parent);
    },

    setTouched(model) {
      return dispatch(actions.setTouched(`deep.${model}`));
    },

    fetch(model, params = null, parent = null) {
      dispatch({ type: 'REQUEST_START' });
      modelHelper.fetchModel(model, dispatch, this.history, params, parent);
    },

    setValid(field) {
      dispatch(actions.setErrors(field, false));
    },

    submit(model, params, is_modal = false, parent = null) {
      dispatch({ type: 'REQUEST_START' });
      return modelHelper.submitModel(model, params, dispatch, this.history, is_modal, parent);
    },

    reset(model) {
      return dispatch(actions.reset(`deep.${model}`));
    },
    addObject(model, data){
      dispatch(actions.push(model, data))
    },
    removeObject(model, data){
      dispatch(actions.change(model, data))
    },
    handleCancel(model, history, parentResourceDetails = {}) {
      let url = ''
      let redirectTo;
      dispatch(actions.reset(`deep.${model}`));
      if(!_.isEmpty(parentResourceDetails)){
        let parentResourceType = parentResourceDetails['type']
        let parentResourceId = parentResourceDetails['id']
        url += `/${pluralize(parentResourceType)}/${parentResourceId}`
      }
      url += `/${pluralize(model)}`
      if(redirectTo){ url += `/${redirectTo}` }
      history.push(url);
    },

    fetchByUrl(url, collection, parmas = null, parent = null){
      modelHelper.fetchByUrlModel(url, collection, dispatch, parmas);
    },
  };
}
