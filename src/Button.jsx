import React from "react";

function Button({ handler, className, children }) {
  return (
    <button onClick={handler} className={className}>
      {children}
    </button>
  );
}

export default Button;
