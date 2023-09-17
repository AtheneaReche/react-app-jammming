import React from "react";

import "./Searchresult.css";

import Tracklist from "../Tracklist/Tracklist";

const Searchresults = (props) => {
  return (
    <div className="Searchresults">
      <h2>Results</h2>
      <Tracklist tracks={props.searchresults} onAdd={props.onAdd} />
    </div>
  );
};

export default Searchresults;