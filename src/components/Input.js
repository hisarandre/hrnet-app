import React from "react";

const Input = ({ label, id, type, value, setValue }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} required value={value} onChange={setValue} />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  large: false,
};
