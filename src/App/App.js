import { React, useEffect, useState } from "react";
import { AppUI } from "./AppUI";
// Importanto el Custom Hook.
import { useLocalStorage } from "../components/hooks/useLocalStorage";
import "./App.css";
// Data estatica desde un objeto "Opcional como carga inicial".
// import { defaultTodos } from "../asset/data/list.data.js";

function App() {
  // Estado de la lista de total de To Do.
  const {
    item,
    saveTodos,
    loading,
    error,
  } = useLocalStorage("BD_V1", []);

  // hook de estado que verifica el value de la caja de busqueda
  const [searchValue, setSearchValue] = useState("");

  // Cantidad de TO DOs completados
  const completedTodos = item.filter((i) => !!i.completed).length;

  // Cantidad total de TODOs
  const totalTodos = item.length;

  // Declaración de los To Do a buscar.
  let searchedTodos = [];

  // Condición que devuelve si el buscador esta vacio todos los To Do que esten almacenados en el LocalStorage y si tiene algun Value devuelve los To Do cuya task sea igual o similar al Value.
  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((i) => {
      const todoTask = i.task.toLowerCase();
      const searchTask = searchValue.toLocaleLowerCase();
      return todoTask.includes(searchTask);
    });
  
  }

  // Agrear nuevos To Do.
  const addTodos = () => {};

  // Cambiar el estado del To Do a completado o devolverlo al estado inicial.
  const completeTodo = (id) => {
    const todoIndex = item.findIndex((i) => i.id === id);
    const newTodos = [...item];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  // Eliminar los To Do de la item.
  const deleteTodo = (task) => {
    const todoIndex = item.findIndex((i) => i.task === task);
    const newTodos = [...item];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <AppUI
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export { App };
