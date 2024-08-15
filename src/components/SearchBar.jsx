import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, change }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={change}
      />
    </section>
  );
}

SearchBar.prototypes = {
    keyword: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
}

export default SearchBar;