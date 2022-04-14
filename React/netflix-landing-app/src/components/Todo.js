import React from "react";

export default function Todo({ todo }) {
  return (
    <div className="todo">
      <p>{todo.title}</p>
    </div>
  );
}
