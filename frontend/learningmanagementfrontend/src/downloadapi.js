import axios from 'axios';
import mime from 'mime';

const API_URL = 'http://localhost:5000/api/download';

// Fetch file metadata (optional)
export const fetchFiles = async (courseno) => {
  const response = await axios.get(`${API_URL}/getresources/${courseno}`);
  return response.data;
};

// Download file by ID
export const downloadFile = async (id) => {
  const response = await axios.get(`${API_URL}/downloadresources/${id}`, {
    responseType: 'blob', // Important to download binary data
  });
 
 //const filename = response.headers['file-name'];
 //const filepath = response.headers['file-path'];

  const contentDisposition = response.headers['Content-Disposition'];
  console.log(contentDisposition);
    const filename = contentDisposition
     ? contentDisposition.split('filename=')[1].replace(/"/g, '') // Remove any quotes
      : 'downloaded-file'; // Default filename if header is missing

      // Create a URL for the downloaded file
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  
  // Use file metadata (like name) from the response to name the file
  //link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1]);
  
  link.setAttribute('download', filename);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};