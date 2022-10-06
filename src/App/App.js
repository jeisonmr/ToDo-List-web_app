import { React, useState } from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItems } from "../components/TodoItems/TodoItems";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { defaultTodos } from "../asset/data/list.data.js";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  // Estado inicial de nuestros TODOs
  const [lista, setLista] = useState(defaultTodos);
  // Cantidad de TODOs completados
  const completedTodos = lista.filter((todo) => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = lista.length;

  let searchTodos = [];

  if (!search.length >= 1) {
    searchTodos = lista;
  } else {
    searchTodos = lista.filter((todo) => {
      const todoTask = todo.task.toLowerCase();
      const searchTask = search.toLocaleLowerCase();
      return todoTask.includes(searchTask);
    });
  }

  const completeTodo = (id) => {
    const todoIndex = lista.findIndex((i) => i.id === id);
    const newTodos = [...lista];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    }else{
      newTodos[todoIndex].completed = true;
    }
    setLista(newTodos);
  };


  const deleteTodo = (task) => {
    const todoIndex = lista.findIndex(todo => todo.task === task);
    const newTodos = [...lista];
    newTodos.splice(todoIndex, 1);
    setLista(newTodos);
  };

  return (
    <>
      <section className="Apps">
        <section className="containerApp">
          <TodoCounter todos={totalTodos} completed={completedTodos} />
          <div className="containerSearchAdd">
            <TodoSearch search={search} setSearch={setSearch} />
            <CreateTodoButton />
          </div>
          <TodoList>
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

export default App;
