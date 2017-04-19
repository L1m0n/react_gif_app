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
        login: (user) => {
            dispatch(actions.login(user));
        }
    }
};

const SignUpPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);


export default SignUpPage;