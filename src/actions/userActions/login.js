import {browserHistory} from 'react-router';
import * as actions from '../index';
import axios from 'axios';

const login = (user) => {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: user
        })
            .then((res) => {
                if (res.data.success) {
                    dispatch(actions.setUser(res.data.user));
                    browserHistory.push('/');
                } else {
                    //dispatch(actions.showHideNotification('email_exist'));
                    console.log(res.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default login;