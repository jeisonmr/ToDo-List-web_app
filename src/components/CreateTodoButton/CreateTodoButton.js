import React from "react";
import iconAdd from "../../asset/img/add.png";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  // Funcionalidad para aperura del modal CreateModal.
  const create = () => {
    // alert("Crea tu tarea :D");
  };
  return (
    // Render del boton para agregar mas To Do
    <button
      onClick={create}
      className="CreateTodoButton">
            <img src={iconAdd} />
    </button>
  );
};
