import axios from 'axios';
import AuthHeader from './AuthHeader.service.';

const API_URL = 'http://localhost:3000/api/test/';

const getAllData = () => {
    return axios.get(API_URL + 'all');
};

const getUserBoard= () => {
    return axios.get(API_URL + 'user', { headers: AuthHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', { headers: AuthHeader() });
};


export default {
    getAllData,
    getUserBoard,
    getAdminBoard,
};