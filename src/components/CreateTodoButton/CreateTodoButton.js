import React from "react";
import iconAdd from "../../asset/img/add.png";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const create = () => {
    alert("Crea tu tarea :D");
  };
  return (
    <button 
      onClick={create}
      className="CreateTodoButton">
            <img src={iconAdd} />
    </button>
  );
};
