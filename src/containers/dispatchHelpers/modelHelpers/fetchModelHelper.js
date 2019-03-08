import Timeout from './timeout';
import Api from './../../../apis';
import modifyData from './modifyData';
import { pluralize } from './../../../utils';
import { addAlert } from '../../../actionCreators/notificationActionCreators';

const fetchModel = (model, dispatch, history, params = null, parent = null) => (
  Api.list(model, params, parent).then((response) => {
    const data = modifyData(model, response.data.data[pluralize(model)]);
    if (response.data.data.count === 0) {
      dispatch(addAlert('No records found!!', 'warning'));
    }
    dispatch({ type: 'REQUEST_DONE' });
    return dispatch({
      type: 'LIST_RESPONSE',
      payload: {
        model_name: pluralize(model),
        data,
        total_count: response.data.data.count
      },
    });
  })
).catch((error) => {
  console.log(error)
  Timeout(error, dispatch, history);
});

export default fetchModel;
