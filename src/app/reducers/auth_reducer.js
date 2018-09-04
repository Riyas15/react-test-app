import {
    LOGIN_FAILURE_ACTION,
    LOGIN_SUCCESS_ACTION,
    LOGOUT_ACTION
} from '../actions/types';
import {setupAxios} from '../utils';

const INIT_STATE = {}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS_ACTION:
            state = {
                auth : action.payload.auth
            }
            setupAxios(state.accessToken);
            return state
    }

    return state;
}



