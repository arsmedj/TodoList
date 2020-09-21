import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import ItemsList from "../ItemsList/ItemsLIst";
const TodoList = (): JSX.Element => {
  let initial = [
    { id: 1, title: "Clean the room!", isCompleted: false },
    { id: 2, title: "Learn ReactJs", isCompleted: true },
    { id: 3, title: "Walk the dog", isCompleted: false },
    { id: 4, title: "Go Shopping!", isCompleted: true },
  ];
  let [todos, setTodos] = useState<Array<ITodo>>(initial);
  let [filter, setFilter] = useState<string>("all");
  let leftCount: Array<ITodo> = todos.filter(
    (todo: ITodo) => !todo.isCompleted
  );

  const onFilterChange = (name: string) => {
    setFilter(name);
  };

  interface ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
  }

  const changeFilter = (filter: string, todos: Array<ITodo>) => {
    switch (filter) {
      case "all": {
        return todos;
      }
      case "completed": {
        return todos.filter((todo) => todo.isCompleted);
      }
      case "active": {
        return todos.filter((todo) => !todo.isCompleted);
      }
      default: {
        return todos;
      }
    }
  };

  let items = changeFilter(filter, todos);

  const onAddTask = (title: string) => {
    let newTodo = {
      id: Date.now(),
      title,
      isDone: false,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const clearCompleted = () => {
    let newArr = todos.filter((todo: ITodo) => {
      if (!todo.isCompleted) {
        return true;
      }
    });
    setTodos(newArr);
  };

  const deleteTodo = (id: number) => {
    let newArr = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newArr);
  };

  const toggleIsCompleted = (id: number, value: boolean) => {
    let newArr = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.isCompleted = value;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(newArr);
  };

  return (
    <div className="list">
      <AddTask onAdd={onAddTask} />
      <ItemsList
        leftCount={leftCount}
        deleteTodo={deleteTodo}
        onFilterChange={onFilterChange}
        clearCompleted={clearCompleted}
        toggleIsCompleted={toggleIsCompleted}
        list={items}
      />
    </div>
  );
};

export default TodoList;
