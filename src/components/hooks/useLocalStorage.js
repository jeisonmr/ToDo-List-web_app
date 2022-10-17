import { React, useState } from "react";

function useLocalStorage(itemsTodos, initialValues) {
  // Declaración y creación del LocalStorage.
  const localStorageTodos = localStorage.getItem(itemsTodos);

  // Declarando los datos de la lista de estados que obtiene del localStorage
  let dataLocalSBD;

  // Condicion que devuelve si el LocalStorage esta vacio no muestra To Do, pero si tiene data la muestra.
  if (!localStorageTodos) {
    localStorage.setItem(itemsTodos, JSON.stringify([]));

    // Array vacio para la lista de To Do
    let dataLocalSBD = initialValues;
  } else {
    dataLocalSBD = JSON.parse(localStorageTodos);
  }

  // Estado inicial de nuestros TODOs
  const [lista, setLista] = useState(dataLocalSBD);

  // Guardar los cambios sea eliminar o completar el To Do.
  const saveTodos = (newSaveTodos) => {
    const stringifyTodos = JSON.stringify(newSaveTodos);

    localStorage.setItem(itemsTodos, stringifyTodos);

    setLista(newSaveTodos);
  };

  return [lista, saveTodos];
}

export { useLocalStorage };
