import React from "react";
import PropTypes from "prop-types";
import './textInput.css'

const TextInput = (props) => {
    const {disabled, onChange, value, name, className, placeholder} = props;
    return (
        <input 
        disabled={disabled}
        onChange={onChange}
        value={value}
        name={name}
        className={`text-input text-white border-0 px-1 py-sm-2 ${className}`}
        type="text"
        placeholder={placeholder}
        />
    );
}

TextInput.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    disabled: false,
    value: '',
    className: '',
    placeholder: ''
};

export default TextInput;