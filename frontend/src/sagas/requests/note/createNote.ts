import axios from 'axios';
const url = '/tickets';
export const createNotes = (id: string, text: string, token: string) => {
  console.log('notes req', 'id:', id, 'text:', text, 'token:', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${url}/${id}/notes`, { text }, config);
};
