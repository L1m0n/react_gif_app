import Notfications from '../Common/Notifications';
import SignUpForm from '../Common/SignUpForm';
import  React from 'react';

const presenter  = (props) => {
    return(
        <div>
            <Notfications/>
            <SignUpForm
                signup={props.signup}
            />
        </div>
    )
};

export default presenter;