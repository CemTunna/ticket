import axios from 'axios';
const url = '/tickets';
export const closeTicket = (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put(`${url}/${id}`, { status: 'closed' }, config);
};
