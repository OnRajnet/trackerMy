import axios from 'axios';
import auth from './auth';

const client = axios.create({
  baseURL: "http://localhost:30600"
});


export default {
  async request ({ headers, ...config }) {
    const requestHeaders = {
      ...headers,
    }

    const token = auth.getAccessToken();

    if (token) {
      requestHeaders.authorization = `Bearer ${token}`;
    }

    const mergedConfig = {
        ...config,

        headers: {
          ...requestHeaders
        },
    };

    return client.request(mergedConfig);
  },

  post (url, data, config) {
    return this.request({
      method: 'post',
      url,
      data,
      ...config,
    });
  },

  get (url, config) {
    return this.request({
      method: 'get',
      url,
      ...config,
    });
  },

  put (url, data, config) {
    return this.request({
      method: 'put',
      url,
      data,
      ...config,
    });
  },
};
