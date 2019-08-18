export const fetchBenches = (filter) => (
    $.ajax({
        url: "/api/benches",
        method: "GET",
        data: filter,
        error: (err) => console.log(err)
    })
);

export const createBench = (bench) => (
    $.ajax({
        url: "/api/benches",
        method: "POST",
        data: {bench}
    })
);

export const fetchBench = (id) => (
    $.ajax({
        url: `/api/benches/${id}`,
        method: "GET"
    })
);