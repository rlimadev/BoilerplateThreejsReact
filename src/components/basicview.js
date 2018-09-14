import React from 'react';
import PropTypes from 'prop-types';

const BasicView = ({ value }) => (
  <div className="basicview">
    <p>{value}</p>
  </div>
)

BasicView.propTypes = {
  value: PropTypes.number.isRequired,
};

export default BasicView;
