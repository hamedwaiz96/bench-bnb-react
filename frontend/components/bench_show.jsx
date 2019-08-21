import React from 'react';
import {Link, Route} from 'react-router-dom';
import {ProtectedRoute} from '../util/route_util';
import BenchMap from './bench_map';
import ReviewIndex from './review_index';
import ReviewFormContainer from './review_form_container';

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
                <li>Average Rating: {this.props.average_rating}</li>
                <ReviewIndex reviews={this.props.reviews} />
                <Link to={`/benches/${this.props.benchId}/review`}>Write a Review</Link>
                <ProtectedRoute path='/benches/:benchId/review' component={ReviewFormContainer} />
            </ul>
        )
    }
}

export default BenchShow;