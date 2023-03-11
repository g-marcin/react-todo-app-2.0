import React from "react";

function Input({ placeholder, inputValue, setInputValue, inputRef }) {
  function clickHandler(e) {
    e.target.placeholder = "";
  }
  function clickOutsideHandler(e) {
    e.target.placeholder = `${placeholder}`;
  }

  return (
    <input
      ref={inputRef}
      placeholder={`${placeholder}`}
      onClick={clickHandler}
      onBlur={clickOutsideHandler}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
}

export default Input;
