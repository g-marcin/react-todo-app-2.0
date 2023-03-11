import React, { useState } from "react";

import Button from "./Button";
import generateRandomKey from "./utils";

function ListItem({ children, removeTask, index, todo }) {
  const [isToggled, setIsToggled] = useState(todo.done);

  function clickTaskHandler() {
    setIsToggled(!isToggled);
    todo.done = !todo.done;
  }

  return (
    <div
      key={generateRandomKey()}
      className={`task grid-item ${isToggled ? "done" : ""}`}
      onClick={() => {
        clickTaskHandler();
      }}
    >
      <div className="box1">{children}</div>
      <div className="box2">
        <Button
          handler={(e) => {
            removeTask(index);
            e.stopPropagation();
          }}
          className="closeBtn"
        >
          X
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
