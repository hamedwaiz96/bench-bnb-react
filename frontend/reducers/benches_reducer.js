import { RECEIVE_ALL_BENCHES, RECEIVE_BENCH } from "../actions/bench_actions";
import merge from 'lodash/merge';

const benchesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ALL_BENCHES):
            return action.benches;
        case(RECEIVE_BENCH):
            return merge({}, state, action.bench)
        default: 
            return state;
    }
}

export default benchesReducer;