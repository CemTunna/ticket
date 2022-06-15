import axios from 'axios';
const url = '/tickets';
export const getNotes = (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`${url}/${id}/notes`, config);
};
