import React from "react";

const SelectMenu = ({ options, optionText, id, name, label, setValue }) => {
  let data = [];

  //formate data if it's not an array
  if (typeof options[0] === "object") {
    options.forEach((op) => data.push(op.name));
  } else {
    data = options;
  }

  //render options
  const dataRendered = data.map((option, index) => {
    return (
      <option key={`${option}-${index}`} value={option}>
        {option} {optionText}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={setValue}>
        {dataRendered}
      </select>
    </div>
  );
};

export default SelectMenu;
