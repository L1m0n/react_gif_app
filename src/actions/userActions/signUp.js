import * as actions from '../index';
import axios from 'axios';

const signUp = (user) => {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/signup',
            data: user
        })
        .then((res) => {
            if (res.data.success) {
                localStorage.setItem('_token', res.data.user.token);
                dispatch(actions.setUser(res.data.user));
                dispatch(actions.showHideNotification('register_success'));
            } else {
                dispatch(actions.showHideNotification('email_exist'));
                console.log(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default signUp;