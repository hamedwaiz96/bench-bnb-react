import {RECEIVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_BENCH} from '../actions/bench_actions';
import merge from 'lodash/merge';


const reviewsReducer = (state={}, action) => {
    switch(action.type){
        case(RECEIVE_REVIEW):
            let new_state = {
                [action.review.id]: action.review
            }
            return merge({}, state, new_state);
        case(RECEIVE_BENCH):
            return merge({}, state, action.reviews)
        default:
            return state;
    }
};

export default reviewsReducer;