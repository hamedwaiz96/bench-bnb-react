import {connect} from 'react-redux';
import BenchShow from './bench_show';
import {fetchBench} from '../actions/bench_actions';
import { getBench, getReviews } from './selector';

const mapStateToProps = (state, ownProps) => ({
    bench: getBench(state.entities.benches, parseInt(ownProps.match.params.benchId)),
    benchId: parseInt(ownProps.match.params.benchId),
    reviews: getReviews(state.entities.reviews),
    average_rating: state.entities.benches.average_rating
});

const mapDispatchToProps = dispatch => ({
    fetchBench: (id) => dispatch(fetchBench(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);