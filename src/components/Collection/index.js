import presenter from '../Homepage/ImageList/presenter';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        images: state.collection,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSingleGif: (id) => {
            dispatch(actions.showGif(id));
        }
    }
};

const Collection = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Collection;