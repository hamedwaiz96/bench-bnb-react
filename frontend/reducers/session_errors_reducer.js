import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state=[], action) => {
    switch(action.type){
        case(RECEIVE_SESSION_ERRORS):
            return merge([], state, action.errors);
        case(RECEIVE_CURRENT_USER):
            return [];
        default: 
            return state;
    }
};

export default sessionErrorsReducer;