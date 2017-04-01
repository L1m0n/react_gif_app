import presenter from '../Homepage/ImageList/presenter';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

const mapStateToProps = (state) => {
    return {
        images: state.collection,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSingleGif: (gif) => {
            dispatch(actions.showGif(gif));
            browserHistory.push('/gifpage');
        }
    }
};

const Collection = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Collection;