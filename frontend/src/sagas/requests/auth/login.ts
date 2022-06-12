import axios from 'axios';
const url = '/users/login';
export const login = (data: any) => axios.post(url, data);
