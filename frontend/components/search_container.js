import {connect} from 'react-redux';
import Search from './search';
import {fetchBenches} from '../actions/bench_actions';
import getBenches from './selector';

const mapStateToProps = state => ({
    benches: getBenches(state)
});

const mapDispatchToProps = dispatch => ({
    fetchBenches: (filter) => dispatch(fetchBenches(filter)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);