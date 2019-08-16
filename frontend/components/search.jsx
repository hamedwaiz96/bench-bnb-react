import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, updateBounds}) =>  (
    <div>
        <BenchMap benches={benches} updateBounds={updateBounds} />
        <BenchIndex benches={benches} updateBounds={updateBounds} />
    </div>
)

export default Search;