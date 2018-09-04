import axios from 'axios';
import * as types from './types.js';

export const loginAction = (username, password) => {
    return function (dispatch){
        axios.post(types.API_URL + "/login", {
            "user": username,
            "pwd": password
        }).then(function (response){
            dispatch({
                type: types.LOGIN_SUCCESS_ACTION,
                payload: response.data
            });
        }).then(function (error) {
            dispatch({
                type: types.LOGIN_FAILURE_ACTION,
                payload: error
            })
        })
    }
}

