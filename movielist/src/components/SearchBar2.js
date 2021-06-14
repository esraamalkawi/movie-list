import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input
          className="sss"
          type="search"
          placeholder="Search by movie name"
          onChange={(event) => props.setQuery(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
