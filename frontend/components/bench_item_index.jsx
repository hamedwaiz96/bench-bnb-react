import React from 'react';

class BenchItemIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li key={this.props.key}>
                Latitude: "{this.props.bench.lat}"
                Longitude: "{this.props.bench.lng}"
                Description: {this.props.bench.description}
            </li>
        )
    }
}

export default BenchItemIndex;