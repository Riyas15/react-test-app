import axios from 'axios';

export const API_URL = "";

axios.defaults.baseURL = API_URL

export const LOGIN_SUCCESS_ACTION = 'login_success'
export const LOGIN_FAILURE_ACTION = 'login_failure'
export const LOGOUT_ACTION = 'logout'

export const DOWNLOAD_SUCCESS_ACTION = 'download_success';
export const DOWNLOAD_FAILURE_ACTION = 'download_failure';