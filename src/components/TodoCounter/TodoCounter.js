import React, { useState } from "react";
import "./TodoCounter.css";

export const TodoCounter = ({ todos, completed }) => {
      return (
    <h2 className="todoCounter">
      Has completado {`${completed} de ${todos} Tareas`}
    </h2>
  );
};
