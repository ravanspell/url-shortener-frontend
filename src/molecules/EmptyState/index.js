import React from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import IconButton from "../../atoms/IconButton";

const EmptyState = (props) => {
    const {
        className,
        message
    } = props;
    return (
        <div
            className={`icon-button ${className}`}
        >
            <IconButton
                icon={faCircleExclamation}
                onClick={() => { }}
                color="#731108"
                size="3x"
            />
            <h3 className="mt-1" style={{ color: '#731108' }}> {message} </h3>
        </div>
    );
}

EmptyState.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
};

EmptyState.defaultProps = {
    className: '',
    message: ''
};

export default EmptyState;


