import fetch from 'dva/fetch';
import axios from 'axios';
import { getCookieByName, setCookie, NotificationUtil } from './utils';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export async function request(url, options) {
  
  //debugger
  const response = await fetch(url, options);

  checkStatus(response);

  const data = await response.json();

  const ret = {
    data,
    //headers: {},
  };
  // if (response.headers.get('x-total-count')) {
  //   ret.headers['x-total-count'] = response.headers.get('x-total-count');
  // }

  return ret;
}

function errorCheck(response) {
  if (!response.response) {
    console.error("[NetworkError]", response.config.method);  // eslint-disable-line
    console.error("[NetworkError]", response.config.url);  // eslint-disable-line
    console.error("[NetworkError]", response.config);  // eslint-disable-line
    NotificationUtil.error({ duration: 0, description: response.message });
    throw new Error(response.message); // eslint-disable-line
  }
  if (response.response.status === 404
    || response.response.status === 504 || response.response.status === 502) {
    const error = new Error(response.response.statusText)
    error.response = response.response
    throw error
  }
  /* if (response.response.status === 302) {
    // this is nerver works, cause 302 will be catched by browser
    window.location.reload();
  } */
  if (response.response.status === 500) {
    if (typeof response.config.errorNotification === 'string') {
      NotificationUtil.error({
        duration: 0,
        description: response.config.errorNotification
      });
    } else if (typeof response.config.errorNotification === 'function') {
      response.config.errorNotification(response);
    } else if (!response.config.errorNotification) {
      NotificationUtil.error({
        duration: 0,
        description: response.response.errorMessage || response.response.data.errorMessage || response.response.data.data.errorMessage // eslint-disable-line
      }); // eslint-disable-line
    }
    throw new Error(response.response.statusText)
  }
}

export function POST(url, data, config={}) { // eslint-disable-line
  return axios.post.call(this, url, data, config).then(checkStatus).catch(errorCheck); // eslint-disable-line
}
