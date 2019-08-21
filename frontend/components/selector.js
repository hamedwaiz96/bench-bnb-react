export const getBenches = (state) => {
    return Object.values(state.entities.benches)
}

export const getBench = (benches, id) => {
    let benches_arr = Object.values(benches);
    let actual_bench = [];
    benches_arr.map(bench => {
        if(bench.id === id){
            actual_bench.push(bench);
        }
    });
    return actual_bench;
}

export const getReviews = (reviews) => {
    return Object.values(reviews);
}