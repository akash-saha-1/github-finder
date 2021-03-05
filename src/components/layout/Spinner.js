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
          width: "300px",
          height: "300px",
          display: "block",
        }}
      />
    </Fragment>
  );
};

export default Spinner;
