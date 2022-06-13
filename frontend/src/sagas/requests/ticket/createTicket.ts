import axios from 'axios';
const url = '/tickets';
export const createTicket = (
  ticketData: { issue: string; description: string },
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(url, ticketData, config);
};
