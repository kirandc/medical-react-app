import Timeout from './timeout';
import Api from './../../../apis';

const fetchByUrlModel = (url, collection, dispatch, params = null) => (
  Api.getCollection(url, params).then((response) => {
    const data = response.data.data[collection]
    return dispatch({
      type: 'COLLECTION_RESPONSE',
      payload: {
        collection_name: collection,
        data,
      },
    });
  })
).catch((error) => {
  Timeout(error, dispatch);
});

export default fetchByUrlModel;
