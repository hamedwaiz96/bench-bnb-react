import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = 'RECEIVE_ALL_BENCHES';


export const receiveAllBenches = (benches) => ({
    type: RECEIVE_ALL_BENCHES,
    benches
});

export const fetchBenches = (filter) => dispatch => (
    APIUtil.fetchBenches(filter).then(benches => {return (dispatch(receiveAllBenches(benches)))})
);