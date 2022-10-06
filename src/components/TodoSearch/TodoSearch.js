import React, { useState } from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ search, setSearch }) => {
  const onSearchValueChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="todoSearch">
      <input
        className="todoInput"
        type="text"
        placeholder="Buscar tarea"
        value={search}
        onChange={onSearchValueChange}
      />
    </div>
  );
};
