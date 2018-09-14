import React from 'react';
import PropTypes from 'prop-types';

import BasicView from './basicview';

const AppContent = ({ value }) => (
  <BasicView value={value} />
);

AppContent.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AppContent;
