import axios from 'axios';
const url = '/users/register';
export const register = (data: any) => axios.post(url, data);
