import React, { FC } from "react";
import Item from "./Item/Item";
import style from "./ItemList.module.css";
interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}
interface Props {
  leftCount: Array<ITodo>;
  list: Array<ITodo>;
  deleteTodo: (id: number) => void;
  onFilterChange: (name: string) => void;
  clearCompleted: () => void;
  toggleIsCompleted: (id: number, value: boolean) => void;
}
const ItemsList: FC<Props> = (props): JSX.Element => {
  let filterBtns = [
    { id: 1, value: "all", label: "All" },
    { id: 2, value: "active", label: "Active" },
    { id: 3, value: "completed", label: "Completed" },
  ];
  return (
    <div>
      {props.list.map((todo: ITodo) => {
        return (
          <Item
            deleteTodo={props.deleteTodo}
            toggleIsCompleted={props.toggleIsCompleted}
            key={todo.id}
            todo={todo}
          />
        );
      })}
      <div className={style.paper}>
        <p className={style.itemsLeft}>{props.leftCount.length + ' '}{props.leftCount.length == 1 ? 'item ' : 'items '}left</p>
        <div className={style.btlList}>
          {filterBtns.map((btn) => {
            return (
              <button
                key={btn.id}
                onClick={() => {
                  props.onFilterChange(btn.value);
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            props.clearCompleted();
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
