import React, { FC, useState } from "react";
import style from "./AddTask.module.css";

interface Props {
  onAdd: (title: string) => void;
}

const AddTask: FC<Props> = (props): JSX.Element => {
  let [title, setTitle] = useState<string>("");
  const onPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && title !== "") {
      props.onAdd(title);
      setTitle("");
    }
  };
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
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
