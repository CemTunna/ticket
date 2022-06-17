import axios from 'axios';
const url = '/tickets';
export const createNotes = (id: string, text: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${url}/${id}/notes`, config);
};
