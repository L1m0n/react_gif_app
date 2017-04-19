import TextField from '../TextField';
import classnames from 'classnames';
import React from 'react';
require('../assets/SignUpForm.scss');

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                password: '',
                email: ''
            },
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                fields: {
                    ...this.state.fields,
                    [e.target.name]: e.target.value
                },
                errors
            })
        } else {
            this.setState({
                fields: {
                    ...this.state.fields,
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {},
            isValid = true,
            keys = Object.keys(this.state.fields),
            l = keys.length;

        for (let i = 0; i < l; i+=1) {
            let val = this.state.fields[keys[i]];
            if(keys[i] === 'email') {
                if(val.length === 0) {
                    errors.email = 'Email is required';
                    isValid = false;

                } else if(!/^(([^<>()\[\]\\.,;&%=*!:#'$^\s@"]+(\.[^<!=>()\[\]\\.,;*&:%'#$^\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
                    errors.email = 'Incorrect email';
                    isValid = false;
                }
            } else if(keys[i] === 'password') {
                if(val.length < 6) {
                    errors.password = 'Minimum 6 symbols';
                    isValid = false;

                } else if(/[|&;$%@#!*`~=_?'"\\\/<>()^\[\]+, ]/g.test(val)) {
                    errors.password = 'Characters and digits only';
                    isValid = false;
                }
            }
        }

        this.setState({errors, isValid: isValid});

        if(isValid) {
            this.props.login(this.state.fields);
        }

    }

    render() {
        return (
            <div className="signup-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <TextField
                        className={classnames('form__field', {'form__field--error': !!this.state.errors.email})}
                        onChange={this.handleChange}
                        name="email"
                        htmlFor="email"
                        label="Email:"
                        value={this.state.fields.email}
                        error={this.state.errors.email}
                    />
                    <TextField
                        className={classnames('form__field', {'form__field--error': !!this.state.errors.password})}
                        onChange={this.handleChange}
                        name="password"
                        htmlFor="password"
                        label="Password:"
                        type='password'
                        value={this.state.fields.password}
                        error={this.state.errors.password}
                    />
                    <div className="form__field form__field--button">
                        <button className="form__button">Login</button>
                    </div>
                    <span className="field__tooltip">{''}</span>
                </form>
            </div>


        )
    }
}

export default LoginForm;