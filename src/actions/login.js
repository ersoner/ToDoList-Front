import axios from 'axios';

import {LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR, SET_LOGIN} from '../constants';
import {url} from '../conf/local.conf';

export const loginPostStart = () => {
    return {
        type: LOGIN_START
    };
};

export const loginPostSuccess = (loginPostData) => {
    return {
        type: LOGIN_START_SUCCESS,
        ...loginPostData,
    };
};

export const loginPostError = (err) => {
    return {
        type: LOGIN_START_ERROR,
        ...err,
    };
};

export const loginPost = (email, password) => {
    return dispatch => {
        dispatch(loginPostStart());
        axios.post(url.login + '?email=' + email + '&password=' + password).then(response => {
            console.log(response.data);
            dispatch(loginPostSuccess(response.data));
        }).catch(err => {
            dispatch(loginPostError(err));
        });
    };
};


export const setLogin = (data) => {
    return {
        type: SET_LOGIN,
        payload: data,
    };
};
