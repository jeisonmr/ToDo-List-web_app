import React, { useState } from "react";
import iconInDelete from "../../asset/img/del.png";
import iconInOk from "../../asset/img/okInCheck.png";
import "./TodoItems.css";

export const TodoItems = (props) => {
  return (
    <>
      <div className={`todoItems ${props.onDeleteTodos && ""}`}>
        <ul>
          <section className="btn-section">
            <button onClick={props.onDeleteTodos} className="btn btn-delete">
              <img className="icon deleteInCheck" src={iconInDelete} />
            </button>
            <button onClick={props.onCompleteTodos} className="btn btn-ok">
              <img
                className={`icon okInCheck ${props.completed && "okOn"}`}
                src={iconInOk}
              />
            </button>
          </section>
          <li className={`${props.completed && "complete"}`}>
            {props.task}
          </li>
        </ul>
      </div>
    </>
  );
};


// function TodoItem(props) {
//   return (
//     <li className="TodoItem">
//       <span
//         className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
//         onClick={props.onComplete}
//       >
//         √
//       </span>
//       <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
//         {props.text}
//       </p>
//       <span className="Icon Icon-delete" onClick={props.onDelete}>
//         X
//       </span>
//     </li>
//   );
// }
// export { TodoItem };
