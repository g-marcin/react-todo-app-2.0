/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import ListItem from "./ListItem";
import generateRandomKey from "./utils";
const List = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    const task = inputValue;
    const currentTodos = [...todos];
    currentTodos.push({
      id: `${generateRandomKey()}`,
      text: `${task}`,
      done: false,
    });
    setTodos(currentTodos);
    console.log(todos);
  };
  const removeTask = (index) => {
    setTimeout(() => {
      const currentTodos = [...todos];
      const remainingTodos = currentTodos.filter(
        (item, todosIndex) => index !== todosIndex
      );
      setTodos(remainingTodos);
    }, 200);
    console.log(`todo removed! ${todos}`);
  };
  function clearAllTasks() {
    setTodos([]);
  }
  function saveTasks() {
    const tasks = JSON.stringify({ tasks: todos });
    window.localStorage.setItem("save", tasks);
  }
  function loadTasks() {
    const savedTasks = window.localStorage.getItem("save");
    if (!savedTasks) {
      alert("no saved tasks!");
    }
    const tasks = JSON.parse(savedTasks).tasks;
    console.log(tasks);
    setTodos(tasks);
  }
  function removeSavedTasks() {
    window.localStorage.removeItem("save");
  }

  return (
    <div className="grid-container">
      <Input
        placeholder="Put your task here..."
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputRef={inputRef}
      />
      <Button handler={addTask} className="outerBtn">
        + add task
      </Button>

      {todos.map((todo, index) => {
        return (
          <ListItem
            key={`id-${generateRandomKey()}`}
            removeTask={removeTask}
            index={index}
            todo={todo}
          >
            {todo.text}
          </ListItem>
        );
      })}

      <Button handler={clearAllTasks} className="outerBtn">
        clear all tasks
      </Button>
      <Button handler={saveTasks} className="outerBtn">
        save Tasks
      </Button>
      <Button handler={loadTasks} className="outerBtn">
        load Tasks
      </Button>
      <Button handler={removeSavedTasks} className="outerBtn">
        remove saved tasks
      </Button>
    </div>
  );
};

export default List;
