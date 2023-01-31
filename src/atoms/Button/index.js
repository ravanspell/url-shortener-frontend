import React from "react";
import PropTypes from "prop-types";
import './button.css'
import { TailSpin } from "react-loader-spinner";

const Button = (props) => {
    const {
        disabled,
        onClick,
        loading,
        className,
        text
    } = props;
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={
                `${loading ? 'primary-button-disabled' : 'primary-button'} 
                btn btn-lg btn-light px-2 text-white fs-61 ${className}`
            }
            type='button'
        >
            {text}
            <TailSpin
                height="18"
                width="18"
                color="#777777"
                wrapperClass="loading-spinner"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={loading}
            />
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
    loading: false,
};

export default Button;