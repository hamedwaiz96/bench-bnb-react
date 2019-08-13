import React from 'react';
import BenchItemIndex from './bench_item_index';

class BenchIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBenches();    
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