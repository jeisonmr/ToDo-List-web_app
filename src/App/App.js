import { React } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/hooks/useContext";
import "./App.css";
// Data estatica desde un objeto "Opcional como carga inicial".
// import { defaultTodos } from "../asset/data/list.data.js";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
