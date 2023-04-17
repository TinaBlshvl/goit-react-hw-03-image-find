import axios from 'axios';

const API_KEY = '35212411-f1d06a82a911fb35f1e71b9dd';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (value, page = 1) => {
  try {
    const url = `/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
