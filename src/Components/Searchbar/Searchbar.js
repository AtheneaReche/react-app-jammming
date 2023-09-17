import React, { useState, useCallback } from "react";

import "./Searchbar.css";

const Searchbar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="Searchbar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default Searchbar;
