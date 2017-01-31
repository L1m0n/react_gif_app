import presenter from './presenter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        url: state.app.gif.url,
        fbUrl: state.app.gif.fbUrl
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