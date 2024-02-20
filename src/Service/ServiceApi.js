import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';
axios.defaults.baseURL = BASE_URL;

export const getMoviesToday = () => axios.get('/cinema/today');

export const getMovie = filmId => axios.get(`/cinema/film/${filmId}`);

export const getSchedule = filmId =>
    axios.get(`/cinema/film/${filmId}/schedule`);

export const regNewUser = newUser =>
    axios.post('users/signin', newUser, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
