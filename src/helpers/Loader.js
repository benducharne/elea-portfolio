import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <ClipLoader color={"#e18868"} size={50} />
    </div>
  );
}

export default Loader;
