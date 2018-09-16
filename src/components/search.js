import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite e aperte enter."
      onKeyUp={handleSearch}
    />
  </div>
);

Search.defaultProps = {
  handleSearch: () => {},
};

Search.propTypes = {
  handleSearch: PropTypes.func,
};

export default Search;
