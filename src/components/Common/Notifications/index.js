import {connect} from 'react-redux';
import presenter from './presenter';
import * as actions from '../../../actions';

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick : (notification) => {
            dispatch(actions.showHideNotification(notification))
        }
    }
};

const SignUpPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);


export default SignUpPage;