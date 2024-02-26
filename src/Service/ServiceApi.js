import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';
axios.defaults.baseURL = BASE_URL;

export const getMoviesToday = () => axios.get('/cinema/today');

export const getMovie = filmId => axios.get(`/cinema/film/${filmId}`);

export const getSchedule = filmId =>
    axios.get(`/cinema/film/${filmId}/schedule`);

export const sendPhoneNumberToGetCode = async userPhoneNumber => {
    try {
        const { data } = await axios.post('/auth/otp', {
            phone: userPhoneNumber,
        });
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const userSignin = async credentials => {
    try {
        const { data } = await axios.post('/users/signin', credentials);
        return data.token;
    } catch (error) {
        console.error(error.message);
    }
};
