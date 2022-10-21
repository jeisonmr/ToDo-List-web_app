import React, { useContext, useState } from "react";

// Importanto el Custom Hook.
import { useLocalStorage } from "../hooks/useLocalStorage";

// const TodoContex = useContext();
const TodoContext = React.createContext();

const TodoProvider = (props) => {
  // Estado de la lista de total de To Do.
  const {
    items: itemList,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("BD_V1", []);

  // hook de estado que verifica el value de la caja de busqueda
  const [searchValue, setSearchValue] = useState("");

  // Cantidad de TO DOs completados
  const completedTodos = itemList.filter((i) => !!i.completed).length;

  // Cantidad total de TODOs
  const totalTodos = itemList.length;

  // Declaración de los To Do a buscar.
  let searchedTodos = [];

  // Condición que devuelve si el buscador esta vacio todos los To Do que esten almacenados en el LocalStorage y si tiene algun Value devuelve los To Do cuya task sea igual o similar al Value.
  if (!searchValue.length >= 1) {
    searchedTodos = itemList;
  } else {
    searchedTodos = itemList.filter((i) => {
      const todoTask = i.task.toLowerCase();
      const searchTask = searchValue.toLocaleLowerCase();
      return todoTask.includes(searchTask);
    });
  }

  // Agrear nuevos To Do.
  const addTodos = () => {};

  // Cambiar el estado del To Do a completado o devolverlo al estado inicial.
  const completeTodo = (id) => {
    const todoIndex = itemList.findIndex((i) => i.id === id);
    const newTodos = [...itemList];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  // Eliminar los To Do de la itemList.
  const deleteTodo = (task) => {
    const todoIndex = itemList.findIndex((i) => i.task === task);
    const newTodos = [...itemList];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }}>
    {props.children}
    </TodoContext.Provider>
  );
};

export {TodoContext, TodoProvider};