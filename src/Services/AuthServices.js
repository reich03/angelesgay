import axios from "axios";
import Cookies from 'js-cookie';

import API_URLS from "./UserServices.js";

export const login = async (email, password) => {
    const response = await axios.post(`${API_URLS.servicio}/login`, { email, password });
    return response.data;
};

export const isAuthenticated = () => {
    const user = Cookies.get('user');
    return user ? true : false;
};

export const getUser = () => {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
};