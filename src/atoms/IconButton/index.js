import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import './iconButton.css'

const IconButton = (props) => {
    const {
        onClick,
        className,
        icon,
        color,
        hint,
        size,
    } = props;
    return (
        <div
            className={`icon-button ${className}`}
            tabIndex={0}
            role="button"
            onKeyDown={onClick}
            onClick={onClick}
            title={hint}
        >
            <FontAwesomeIcon size={size} color={color} icon={icon} />
        </div>
    );
}

IconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.any.isRequired,
    className: PropTypes.string,
    color:  PropTypes.string,
    hint: PropTypes.string,
    size: PropTypes.oneOf([
        "2xs",
         "xs",
         "sm",
         "lg",
         "xl",
         "2xl",
         "1x",
         "2x",
         "3x",
         "4x",
         "5x",
         "6x",
         "7x",
         "8x",
         "9x",
        "10x"
    ])
};

IconButton.defaultProps = {
    className: '',
    color: '',
    hint: '',
    size: '1x',
};

export default IconButton;