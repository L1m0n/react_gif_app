//import * as actions from '../../../actions';
import presenter from './presenter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        url: state.app.gif.url
    }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const Gif = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Gif;