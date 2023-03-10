import React from "react";

const Fieldset = ({ children, legend }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
