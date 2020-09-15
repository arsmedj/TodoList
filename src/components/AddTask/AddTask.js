import React, { useState } from "react";
import style from "./AddTask.module.css";
const AddTask = (props) => {
  let [title, setTitle] = useState("");
  const onPressHandler = (e) => {
    if (e.key == "Enter" && title != false) {
      props.onAdd(title);
      setTitle("");
    }
  };
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <input
        onChange={onChangeHandler}
        value={title}
        type="text"
        placeholder="What needs to be done?"
        className={style.input + " " + "browser-default"}
        onKeyPress={onPressHandler}
      />
    </div>
  );
};

export default AddTask;
