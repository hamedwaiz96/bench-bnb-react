import {connect} from 'react-redux';
import BenchIndex from './bench_index';
import {fetchBenches} from '../actions/bench_actions';
import getBenches from './selector';

const mapStateToProps = state => ({
    benches: getBenches(state)
});

const mapDispatchToProps = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);