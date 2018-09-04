import {
    DOWNLOAD_FAILURE_ACTION,
    DOWNLOAD_SUCCESS_ACTION
} from '../actions/types';
import {setupAxios} from '../utils';

const INIT_STATE = {}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case DOWNLOAD_SUCCESS_ACTION:
            state = {
                data : action.payload.data
            }

            return state;
        
        case DOWNLOAD_FAILURE_ACTION:
            return Object.assign({}, state, {
                downloadFailure: true
            });

    }

    return state;
}