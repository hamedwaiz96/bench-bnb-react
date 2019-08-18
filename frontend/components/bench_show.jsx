import React from 'react';
import BenchMap from './bench_map';

class BenchShow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                <BenchMap benches={this.props.bench} benchId={this.props.benchId} singleBench={true} fetchBench={this.props.fetchBench}/>
                <li>Description: {this.props.bench[0].description}</li>
                <li>Latitude: {this.props.bench[0].lat}</li>
                <li>Longitude: {this.props.bench[0].lng}</li>
            </ul>
        )
    }
}

export default BenchShow;