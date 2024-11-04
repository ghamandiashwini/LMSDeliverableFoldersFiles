import axios from 'axios';

const API_URL = 'http://localhost:5000/api/file';

export const uploadFile = async (file,courseno) => {
  const formData = new FormData();
  formData.append('file', file);

  return await axios.post(`${API_URL}/upload/${courseno}`,formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};