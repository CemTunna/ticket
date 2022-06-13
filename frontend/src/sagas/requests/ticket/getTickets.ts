import axios from 'axios';
const url = '/tickets';
export const getTickets = (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(url, config);
};
