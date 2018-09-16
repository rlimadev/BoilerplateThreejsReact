import React from 'react';
import PropTypes from 'prop-types';

import BasicView from './basicview';
import Search from './search';

const AppContent = ({ inputText, handleSearch }) => (
  <div className="search">
    <Search handleSearch={handleSearch} />
    <BasicView inputText={inputText} />
  </div>
);

AppContent.defaultProps = {
  handleSearch: () => {},
};

AppContent.propTypes = {
  inputText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func,
};

export default AppContent;
