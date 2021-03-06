import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state={}, action) => {
    switch(action.type){
        case(RECEIVE_CURRENT_USER):
            let new_state = {
                [action.currentUser.id]: action.currentUser
            }
            return merge({}, state, new_state);
        default:
            return state;
    }
};

export default usersReducer;