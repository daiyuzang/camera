import { request } from '../utils/request';
import { POST } from '../utils/request';
// import { URL } from '../utils/Constant';

import { PAGE_SIZE } from '../constants';
// let csrfHeaderName = window.csrfHeader || false;
// let csrfToken = window.csrfToken || false;

// export function get(data, config) {
//   let url = `${URL.Tests}?status=finished`;
//   let CONF = {
//     url: url,
//     method: 'GET',
//     data: data
//   };
//   return request1({ ...CONF, ...config });
// }



// export function fetch() {
//   return request('../components/MainLayout/Header.js');
// }

export function fetch({ page }){
  console.log(page);
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function getSource(isbn) {
  return request(`http://localhost:7777/request_data?isbn=${isbn}`);
}
// export function postData(values) { 
//   let config = {};
//   return POST(`http://45.77.68.236:8080/crawler-starter`, values, config);
// }

// export function remove(id) {
//   return request(`/api/users/${id}`, {
//     method: 'DELETE',
//   });
// }

// export function patch(id, values) {
//   return request(`/api/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(values),
//   });
// }

// export function create(values) {
//   return request('/api/users', {
//     method: 'POST',
//     body: JSON.stringify(values),
//   });
// }
