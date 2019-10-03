import {REGISTER_START, REGISTER_START_ERROR, REGISTER_START_SUCCESS, SET_REGISTER} from '../constants';
import {cloneObj} from '../utils/utils';

let initialState = {
    register: null,
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START   :
            return cloneObj(state, {loading: true});
        case REGISTER_START_SUCCESS :
            return cloneObj(state, {loading: false, register: action});
        case REGISTER_START_ERROR :
            return cloneObj(state, {loading: false});
        case SET_REGISTER :
            return cloneObj(state, {loading: false, register: action.payload});
        default :
            return state;
    }
};