import {LOGIN_START, LOGIN_START_ERROR, LOGIN_START_SUCCESS, SET_LOGIN} from '../constants';
import {cloneObj} from '../utils/utils';

let initialState = {
    login: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START   :
            return cloneObj(state, {loading: true});
        case LOGIN_START_SUCCESS :
            return cloneObj(state, {loading: false, login: action});
        case LOGIN_START_ERROR :
            return cloneObj(state, {loading: false});
        case SET_LOGIN :
            return cloneObj(state, {loading: false, login: action.payload});
        default :
            return state;
    }
};