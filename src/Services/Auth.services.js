
import axios from 'axios';

/*The auth service uses Axios for HTTP request and local Storage for user information
 and JWT. It provide thw following functions:
 1. loginUser():Post{username,password}
 2. logoutCurentUser():Remove JWT from Local storage using localStorage.removeItem
 3. RegisterUser():Post{username,email,password}
 4. getCurrentUser(): get cuurrent user form local storage
 */

const API_URL = 'http://localhost:3000/api/auth/';


const registerUser= (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    });
};

const loginUser = (username, password) => {
    return axios.post(API_URL + 'login', {
        username,
        password
    }).then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    });
};

const logoutCurrentUser = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};


export default{
    registerUser,
        loginUser,
        logoutCurrentUser,
        getCurrentUser,
};