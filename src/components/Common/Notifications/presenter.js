require('../assets/Notifications.scss');
import {Link} from 'react-router';
import React from 'react';

const presenter = (props) => {
    return(
        <div>
            <div className="notification__wrapper">
                <div className="notification notification--email_exist">
                    <h3 className="notification__title">Email already exist!</h3>
                    <p className="notification__message"><Link to="/login">Login</Link> or <Link to="/forgot-password">reset password</Link></p>
                    <button className="notification__button ">
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default presenter;