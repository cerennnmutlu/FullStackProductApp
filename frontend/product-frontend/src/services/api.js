import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/api/products`);
  return response.data;
};
