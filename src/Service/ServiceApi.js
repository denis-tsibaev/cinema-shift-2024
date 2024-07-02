import axios from 'axios';

export const BASE_URL = 'https://shift-backend.onrender.com';
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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
    token.set(data.token);
    return data.token;
  } catch (error) {
    console.error(error.message);
  }
};

export const userUpdate = async credentials => {
  try {
    const { data } = await axios.patch('/users/profile', credentials);
    console.log(data.success);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserSession = async () => {
  try {
    const { data } = await axios.get('/users/session');
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getTickets = async credentials => {
  try {
    const { data } = await axios.post('/cinema/payment', credentials);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
