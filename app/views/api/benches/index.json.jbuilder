json.benches do
    json.array!(@benches) do |bench|
        json.extract! bench, :lat, :lng, :description
    end
end