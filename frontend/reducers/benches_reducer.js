import { RECEIVE_ALL_BENCHES, RECEIVE_BENCH } from "../actions/bench_actions";
import {RECEIVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const benchesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ALL_BENCHES):
            return action.benches;
        case(RECEIVE_BENCH):
            return merge({}, state, action.bench)
        case(RECEIVE_REVIEW):
            let new_state = merge({}, state);
            new_state.average_rating = action.average_rating;
            return new_state;
        default: 
            return state;
    }
}

export default benchesReducer;