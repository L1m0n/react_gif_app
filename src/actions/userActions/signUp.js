import setUser from './setUser';
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
                dispatch(setUser(res.data.user));
            } else {
                console.log(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default signUp;