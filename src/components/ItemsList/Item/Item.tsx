import React, { FC } from "react";
import style from "./Item.module.css";
interface Props {
  todo: ITodo;
  toggleIsCompleted: (id: number, value: boolean) => void;
  deleteTodo: (id: number) => void;
}
interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}
const Item: FC<Props> = ({
  todo,
  toggleIsCompleted,
  deleteTodo,
}): JSX.Element => {
  return (
    <div className={style.item}>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            toggleIsCompleted(todo.id, !todo.isCompleted);
            console.log("done");
          }}
          checked={todo.isCompleted}
        />
        <span></span>
      </label>
      {todo.isCompleted ? (
        <p className={style.completed}>{todo.title}</p>
      ) : (
        <p>{todo.title}</p>
      )}
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={style.deleteBtn}
      >
        X
      </button>
    </div>
  );
};

export default Item;
