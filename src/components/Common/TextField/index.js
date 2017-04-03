import React from 'react';
//import classnames from 'classnames';

const TextField = ({name, value, htmlFor, className, error, label, type, onChange}) => {
    return (
        <div className={className}>
            <label htmlFor={htmlFor} className="field__label">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="field__input"
            />
            <span className="field__tooltip">{error}</span>
        </div>
    )
}

TextField.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

TextField.defaultProps = {
    type: 'text'
}

export default TextField;