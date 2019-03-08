import axios from 'axios';

import NetworkInterceptor from './networkInterceptor';
import { pluralize, toQueryString } from './../utils';
import headerConfig from './headerConfig';

import { SERVICE_URL } from '../Constants.js';

export const getUrl = (model, params = null) => {
  //for now hardcoaded api/v1
  const baseURL = `${SERVICE_URL}/${pluralize(model)}`;
  if (params) {
    return `${baseURL}?${toQueryString(params)}`;
  }
  return baseURL;
};

export const apiConfig = {
  list(model, params) {
    return (
      {
        url: getUrl(model, params),
        method: 'get',
        headers: headerConfig.get(),
      }
    );
  },
  create(model, params) {
    return ({
      data: JSON.stringify(params),
      url: getUrl(model),
      method: 'post',
      headers: headerConfig.get(),
    });
  },
  update(model, params) {
    const baseUrl = getUrl(model);
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
  get(model, id) {
    return ({
      url: `${getUrl(model)}/${id}`,
      method: 'get',
      headers: headerConfig.get(),
    });
  },
};

const Api = {
  list(model, params) {
    return axios(apiConfig.list(model, params));
  },
  create(model, params) {
    return axios(apiConfig.create(model, params));
  },
  update(model, params) {
    return axios(apiConfig.update(model, params));
  },
  get(model, id) {
    return axios(apiConfig.get(model, id));
  }
};

NetworkInterceptor.responseType();

export default Api;
