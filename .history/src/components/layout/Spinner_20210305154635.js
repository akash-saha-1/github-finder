import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          margin: "auto",
          width: "400px",
          height: "400px",
          display: "block",
        }}
      />
    </Fragment>
  );
};

export default Spinner;
