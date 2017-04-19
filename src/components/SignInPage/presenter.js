import Notfications from '../Common/Notifications';
import LoginForm from '../Common/LoginForm';
import  React from 'react';

const presenter  = (props) => {
    return(
        <div style={{paddingTop: '100px'}}>
            <Notfications/>
            <LoginForm
                login={props.login}
            />
        </div>
    )
};

export default presenter;