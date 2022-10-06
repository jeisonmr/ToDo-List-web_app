import React from "react";
import './TodoList.css';

export const TodoList = (props) => {
  return <div>
  <div className="todoList">
      {props.children}
  </div>
  </div>;
};
