require('../assets/Notifications.scss');
import {Link} from 'react-router';
import React from 'react';

const presenter = (props) => {
    return(
        <div>
            <div  style={props.notifications.email_exist ? {display: 'block'} : {display: 'none'}}className="notification__wrapper">
                <div style={props.notifications.email_exist ? {display: 'block'} : {display: 'none'}} className="notification notification--email_exist">
                    <h3 className="notification__title">Email already exist!</h3>
                    <p className="notification__message"><Link to="/login">Login</Link> or <Link to="/forgot-password">reset password</Link></p>
                    <button onClick={() => props.onClick('email_exist')} className="notification__button">
                    </button>
                </div>
            </div>
            <div  style={props.notifications.register_success ? {display: 'block'} : {display: 'none'}}className="notification__wrapper">
                <div style={props.notifications.register_success ? {display: 'block'} : {display: 'none'}} className="notification notification--email_exist">
                    <h3 className="notification__title">Registration successful!</h3>
                    <button onClick={() => props.onClick('register_success')} className="notification__button">
                    </button>
                </div>
            </div>
        </div>
    )
}

export default presenter;
