import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.css";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const [filterList, setFilterList] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    console.log(response.data.todos);
    setTodoList(response.data.todos);
    setFilterList(response.data.todos);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const completeHandler = () => {
    const data = todoList.filter((item) => item.completed != false);
    setFilterList(data);
  };
  const incompletehandler = () => {
    const data = todoList.filter((item) => item.completed != true);
    setFilterList(data);
  };
  const resethandler = () => {
    setFilterList(todoList);
  };
  return (
    <div className={classes.container}>
      <h2>TodoList</h2>
      <span className={classes.button}>
        <button onClick={completeHandler}>Completed</button>
        <button onClick={incompletehandler}>Not Completed</button>
        <button onClick={resethandler}>Reset</button>
      </span>

      <div className={classes.content}>
        {filterList &&
          filterList.map((item, index) => (
            <li key={item.id}>
              {index + 1}:{item.todo}
            </li>
          ))}
      </div>
    </div>
  );
}
