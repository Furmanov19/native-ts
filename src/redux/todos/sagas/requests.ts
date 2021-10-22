import axios from 'axios';

export function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users/2/todos',
  });
}
