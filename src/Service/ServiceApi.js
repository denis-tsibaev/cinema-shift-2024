import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';
axios.defaults.baseURL = BASE_URL;

export const getMoviesToday = () => axios.get('/cinema/today');

export const getMovie = filmId => axios.get(`/cinema/film/${filmId}`);

export const getSchedule = filmId =>
    axios.get(`/cinema/film/${filmId}/schedule`);

export const sendPhoneNumberToGetCode = userPhoneNumber => {
    const { data } = axios.post('/auth/otp', { phone: userPhoneNumber });
    return data;
};

export const userSignin = credentials => {
    const { data } = axios.post('/users/signin', credentials);
    console.log('credentials', credentials);
    return data;
};
