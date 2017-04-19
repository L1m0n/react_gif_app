import * as actions from '../../actions';
import presenter from './presenter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        gif: state.app.gif,
        collection: state.collection
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => {
            dispatch(actions.signUp(user));
        }
    }
};

const SignUpPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);


export default SignUpPage;