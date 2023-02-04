import React, { useState } from "react";

const SearchBar = ({ onFormSubmitSearch }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Make sure we call from parent component
    onFormSubmitSearch(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
