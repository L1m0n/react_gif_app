import presenter from './presenter';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

const mapStateToProps = (state) => {
    return {
        gif: state.app.gif
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
        add: (item) => {
            dispatch(actions.addToCollection(item));
        }
  }
};

const Gif = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Gif;