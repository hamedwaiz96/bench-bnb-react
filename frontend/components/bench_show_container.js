import {connect} from 'react-redux';
import BenchShow from './bench_show';
import {fetchBench} from '../actions/bench_actions';
import { getBench } from './selector';

const mapStateToProps = (state, ownProps) => ({
    bench: getBench(state.entities.benches, parseInt(ownProps.match.params.benchId)),
    benchId: parseInt(ownProps.match.params.benchId)
});

const mapDispatchToProps = dispatch => ({
    fetchBench: (id) => dispatch(fetchBench(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);