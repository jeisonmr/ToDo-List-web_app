import { React, useState } from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItems } from "../components/TodoItems/TodoItems";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import "./App.css";
// Data estatica desde un objeto.
import { defaultTodos } from "../asset/data/list.data.js";

function App() {
  // Array vacio para la lista de To Do
  let todosBD = [];
  // Declaración y creación del LocalStorage.
  const localStorageTodos = localStorage.getItem("BD_V1");

  // Condicion que devuelve si el LocalStorage esta vacio no muestra To Do, pero si tiene data la muestra.
  if (!localStorageTodos) {
    localStorage.setItem("BD_V1", JSON.stringify([]));
  } else {
    todosBD = JSON.parse(localStorageTodos);
  }

  // hook de estado que verifica el value de la caja de busqueda
  const [search, setSearch] = useState("");
  // Estado inicial de nuestros TODOs
  const [lista, setLista] = useState(todosBD);
  // Cantidad de TODOs completados
  const completedTodos = lista.filter((todo) => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = lista.length;

  // Declaración de los To Do a buscar.
  let searchTodos = [];

  // Condición que devuelve si el buscador esta vacio todos los To Do que esten almacenados en el LocalStorage y si tiene algun Value devuelve los To Do cuya task sea igual o similar al Value.
  if (!search.length >= 1) {
    searchTodos = lista;
  } else {
    searchTodos = lista.filter((todo) => {
      const todoTask = todo.task.toLowerCase();
      const searchTask = search.toLocaleLowerCase();
      return todoTask.includes(searchTask);
    });
  }

  // Agrear nuevos To Do.
  const addTodos = () => {};

  // Guardar los cambios sea eliminar o completar el To Do.
  const saveTodos = (newSaveTodos) => {
    const stringifyTodos = JSON.stringify(newSaveTodos);
    localStorage.setItem("BD_V1", stringifyTodos);
    setLista(newSaveTodos);
  };

  // Cambiar el estado del To Do a completado o devolverlo al estado inicial.
  const completeTodo = (id) => {
    const todoIndex = lista.findIndex((i) => i.id === id);
    const newTodos = [...lista];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  // Eliminar los To Do de la lista.
  const deleteTodo = (task) => {
    const todoIndex = lista.findIndex((todo) => todo.task === task);
    const newTodos = [...lista];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <section className="Apps">
        {/* Componente contenedor */}
        <section className="containerApp">
          {/*Titulo y contador de estados y cantidad de los componentes */}
          <TodoCounter todos={totalTodos} completed={completedTodos} />
          <div className="containerSearchAdd">
          {/* Buscador de To Do en la lista */}
            <TodoSearch search={search} setSearch={setSearch} />
            {/* Apertura del modal para crear nuevos To Do */}
            <CreateTodoButton />
          </div>

          {/* Lista del conjunto de To Do */}
          <TodoList>
          {/* Render por cada To Do almacenado*/}
            {searchTodos.map((i) => (
              <TodoItems
                key={i.id}
                task={i.task}
                completed={i.completed}
                status={i.status}
                onCompleteTodos={() => completeTodo(i.id)}
                onDeleteTodos={() => deleteTodo(i.task)}
              />
            ))}
          </TodoList>
        </section>
      </section>
    </>
  );
}

export { App };
