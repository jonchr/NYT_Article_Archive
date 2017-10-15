import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", margin: "2px" }}>
    {props.children}
  </button>;
