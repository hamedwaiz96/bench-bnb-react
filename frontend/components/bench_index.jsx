import React from 'react';
import BenchItemIndex from './bench_item_index';

class BenchIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let filter_test = {
            "northEast": { "lat": "37.80971", "lng": "-122.39208" },
            "southWest": { "lat": "37.74187", "lng": "-122.47791" }
    }
        this.props.fetchBenches(filter_test);    
    }

    render(){
        return(
            <ul>
                {this.props.benches.map((bench) => {
                    return(
                        <BenchItemIndex key={bench.id} bench={bench} />
                    )
                })}
            </ul>
        )
    }
}

export default BenchIndex;