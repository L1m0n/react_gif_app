import presenter from './presenter';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

const mapStateToProps = (state) => {
    return {
        gif: state.app.gif,
        collection: state.collection
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
        add: (item) => {
            dispatch(actions.addToCollection(item));
        },
        remove: (id) => {
            dispatch(actions.removeFromCollection(id));
        }
  }
};

const Gif = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Gif;