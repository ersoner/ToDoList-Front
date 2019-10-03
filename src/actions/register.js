import axios from 'axios';

import {REGISTER_START, REGISTER_START_SUCCESS, REGISTER_START_ERROR, SET_REGISTER} from '../constants';
import {url} from '../conf/local.conf';

export const registerPostStart = () => {
    return {
        type: REGISTER_START//YOK TEK BURASI
        
    };
};

export const registerPostSuccess = (registerPostData) => {
    return {
        type: REGISTER_START_SUCCESS,
        ...registerPostData,
    };
};

export const registerPostError = (err) => {
    return {
        type: REGISTER_START_ERROR,
        ...err,
    };
};

export const registerPost = (fullName, email, password) => {
    return dispatch => {
        dispatch(registerPostStart());
        axios.post(url.register + '?fullName=' + fullName + '&email=' + email + '&password=' + password).then(response => {
            dispatch(registerPostSuccess(response.data));
        }).catch(err => {
            dispatch(registerPostError(err));
        });
    };
};


export const setLogin = (data) => {
    return {
        type: SET_REGISTER,
        payload: data,
    };
};
