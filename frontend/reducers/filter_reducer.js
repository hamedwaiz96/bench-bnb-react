import {UPDATE_BOUNDS} from '../actions/filter_actions';
import merge from 'lodash/merge';

const _nullState = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10
}

const filterReducer = (state=_nullState, action) => {
    switch(action.type){
        case(UPDATE_BOUNDS):
            let newFilter = {
                [action.filter]: action.value
            }
            return merge({}, state, newFilter)
        default:
            return state;
    }
}

export default filterReducer;