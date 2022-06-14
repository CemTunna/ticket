import axios from 'axios';
const url = '/tickets';
export const getTicket = (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`${url}/id`, config);
};
