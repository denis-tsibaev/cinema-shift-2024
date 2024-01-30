import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';

export const getMoviesToday = () => axios.get(`${BASE_URL}/cinema/today`);

export const getMovie = filmId =>
    axios.get(`${BASE_URL}/cinema/film/${filmId}`);

export const getSchedule = filmId =>
    axios.get(`${BASE_URL}/cinema/film/${filmId}/schedule`);
