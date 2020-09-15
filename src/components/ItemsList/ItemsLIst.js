import React from "react";
import Item from "./Item/Item";
import style from "./ItemList.module.css";
const ItemsList = (props) => {
  let filterBtns = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div>
      {props.list.map((todo) => {
        return (
          <Item
            deleteTodo={props.deleteTodo}
            toggleIsCompleted={props.toggleIsCompleted}
            toggleIsImpotant={props.toggleIsImpotant}
            key={todo.id}
            todo={todo}
          />
        );
      })}
      <div className={style.paper}>
        <p className={style.itemsLeft}>
          {props.itemsLeft} {props.leftCount.length} items left
        </p>
        <div className={style.btlList}>
          {filterBtns.map((btn) => {
            return (
              <button
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
