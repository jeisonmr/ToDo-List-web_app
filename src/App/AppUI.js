import { React, useState } from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItems } from "../components/TodoItems/TodoItems";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";

function AppUI({
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }) {
  return (
    <>
      <section className="Apps">
        {/* Componente contenedor */}
        <section className="containerApp">
          {/*Titulo y contador de estados y cantidad de los componentes */}
          <TodoCounter todos={totalTodos} completed={completedTodos} />
          <div className="containerSearchAdd">
            {/* Buscador de To Do en la lista */}
            <TodoSearch search={searchValue} setSearch={setSearchValue} />
            {/* Apertura del modal para crear nuevos To Do */}
            <CreateTodoButton />
          </div>

          {/* Lista del conjunto de To Do */}
          <TodoList>
            {loading && <p>Cargando...</p>}
            {error && <p>Error Alert...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea una tarea!</p>}
            {/* Render por cada To Do almacenado*/}
            {searchedTodos.map((i) => (
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
};

export {AppUI};