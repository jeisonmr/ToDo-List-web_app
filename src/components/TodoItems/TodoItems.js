import React, { useState } from "react";
import iconInDelete from "../../asset/img/del.png";
import iconInOk from "../../asset/img/okInCheck.png";
import "./TodoItems.css";

export const TodoItems = (props) => {
  return (
    <>
      {/* Asignacion de la estilos por cada To Do de la lista */}
      <div className={`todoItems ${props.onDeleteTodos}`}>
        <ul>
          <section className="btn-section">
          {/* Boton para borrar el To Do */}
            <button onClick={props.onDeleteTodos} className="btn btn-delete">
              {/* Icono de caneca de basura */}
              <img className="icon deleteInCheck" src={iconInDelete} />
            </button>
            {/* Boton para cambiar el estado completado del To Do */}
            <button onClick={props.onCompleteTodos} className="btn btn-ok">
            {/* Icono de Check OK */}
              <img className={`icon okInCheck ${props.completed && "okOn"}`}
                src={iconInOk}
              />
            </button>
          </section>
          {/* Asignación de estilos al marcar ok en el To Do */}
          <li className={`${props.completed && "complete"}`}>
          {/* Renderizar la Task que contiene cada To Do */}
            {props.task}
          </li>
        </ul>
      </div>
    </>
  );
};