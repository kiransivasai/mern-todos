import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="loader">
      <CircularProgress />
    </div>
  );
}

export default Preloader;
