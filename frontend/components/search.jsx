import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

const Search = ({benches, updateBounds, minSeating, maxSeating}) =>  (
    <div>
        <BenchMap benches={benches} updateBounds={updateBounds} />
        <BenchIndex benches={benches} updateBounds={updateBounds} />
        <FilterForm updateBounds={updateBounds} minSeating={minSeating} maxSeating={maxSeating} />
    </div>
)

export default Search;