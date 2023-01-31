// TODO: Remove lint ignore when you use this template
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const replaceName = (props) => {
  const { v } = props;

  return (
    <div>replaceName</div>
  );
};

// set props and their data types
replaceName.propTypes = {
  props: PropTypes.array,
};
// set props default values
// required props not need default value
replaceName.defaultProps = {
  props: ['string'],
};

export default replaceName;
