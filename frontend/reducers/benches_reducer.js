import { RECEIVE_ALL_BENCHES } from "../actions/bench_actions";

const benchesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ALL_BENCHES):
            debugger;
            return action.benches;
        default: 
            return state;
    }
}

export default benchesReducer;