import axios from 'axios';

const API_BASE = 'http://localhost:5261/api'; //  Not HTTPS!


export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};
