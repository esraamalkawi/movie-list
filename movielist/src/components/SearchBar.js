import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search For A Movie"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
