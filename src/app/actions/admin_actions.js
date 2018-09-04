import axios from 'axios';
import * as types from './types';

export const downloadReportAction = (id) => {
    return function (dispatch) {
        axios.get(types.API_URL + '/id='+ id, {
            responseType: "blob"
        })
        .then(function (response){
            dispatch({
                type: types.DOWNLOAD_SUCCESS_ACTION,
                payload: response.data
            })
        })
        .catch(function (error){
            dispatch({
                type: types.DOWNLOAD_FAILURE_ACTION,
                payload: error
            })
        })
    }
}