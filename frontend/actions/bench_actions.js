import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = 'RECEIVE_ALL_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';


export const receiveAllBenches = (benches) => ({
    type: RECEIVE_ALL_BENCHES,
    benches
});

export const receiveBench = (bench) => ({
    type: RECEIVE_BENCH,
    bench
});

export const fetchBenches = (filter) => dispatch => (
    APIUtil.fetchBenches(filter).then(benches => {return (dispatch(receiveAllBenches(benches)))})
);

export const createBench = (bench) => dispatch => (
    APIUtil.createBench(bench).then((bench) => dispatch(receiveBench(bench)))
);