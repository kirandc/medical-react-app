import axios from 'axios';

import NetworkInterceptor from './networkInterceptor';
import { pluralize, toQueryString } from './../utils';
import headerConfig from './headerConfig';

import { SERVICE_URL } from '../Constants.js';

export const getUrl = (model, params: null, parent: null) => {
  let baseURL
  if(parent){
    baseURL = `${SERVICE_URL}/${parent['type']}/${parent['id']}/${pluralize(model)}`
  }else{
    baseURL = `${SERVICE_URL}/${pluralize(model)}`;
  }
  return baseURL;
};

export const apiConfig = {
  list(model, params, parent: null) {
    return (
      {
        url: getUrl(model, params, parent: null),
        method: 'get',
        headers: headerConfig.get(),
      }
    );
  },
  create(model, params, parent: null) {
    return ({
      data: JSON.stringify(params),
      url: getUrl(model, params, parent: null),
      method: 'post',
      headers: headerConfig.get(),
    });
  },
  update(model, params, parent: null) {
    const baseUrl = getUrl(model, params, parent: null);
    const id = params[`${model}`].id;
    return (
      {
        url: `${baseUrl}/${id}`,
        data: JSON.stringify(params),
        method: 'put',
        headers: headerConfig.get(),
      }
    );
  },
  get(model, id, params, parent: null) {
    return ({
      url: `${getUrl(model, params, parent: null)}/${id}`,
      method: 'get',
      headers: headerConfig.get(),
    });
  },
};

const Api = {
  list(model, params, parent: null) {
    return axios(apiConfig.list(model, params, parent: null));
  },
  create(model, params, parent: null) {
    return axios(apiConfig.create(model, params, parent: null));
  },
  update(model, params, parent: null) {
    return axios(apiConfig.update(model, params, parent: null));
  },
  get(model, id, params: null, parent: null) {
    return axios(apiConfig.get(model, id, params, parent: null));
  }
};

NetworkInterceptor.responseType();

export default Api;
