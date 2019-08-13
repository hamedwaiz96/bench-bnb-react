import React from 'react';

class BenchItemIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                Latitude: "{this.props.bench.lat}"
                Longitude: "{this.props.bench.lng}"
                Description: {this.props.bench.description}
            </li>
        )
    }
}

export default BenchItemIndex;