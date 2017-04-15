import axios from 'axios';

const signUp = (user) => {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/register',
            data: user
        })
        .then((res) => {
            console.log(res.data.status);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default signUp;