export const fetchBenches = (filter) => (
    $.ajax({
        url: "/api/benches",
        method: "GET",
        data: {bounds: filter},
        error: (err) => console.log(err)
    })
)