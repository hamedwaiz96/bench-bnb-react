import {connect} from 'react-redux';
import Search from './search';
import getBenches from './selector';
import {updateBounds} from '../actions/filter_actions';

const mapStateToProps = state => ({
    benches: getBenches(state)
});

const mapDispatchToProps = dispatch => ({
    updateBounds: (filter, value) => dispatch(updateBounds(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);