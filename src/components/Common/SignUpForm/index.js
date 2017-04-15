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
        signup: (user) => {
            dispatch(actions.signUp(user));
        }
    }
};

const SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default SignUpForm;