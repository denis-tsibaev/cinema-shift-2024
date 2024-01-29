import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';

export const getMoviesToday = () => axios.get(`${BASE_URL}/cinema/today`);
