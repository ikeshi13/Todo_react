import React from "react";

export const InputTodos = (props) => {
  const { toDoText, onChangeText, onClickAdd, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={toDoText}
          onChange={onChangeText}
        />
        <button disabled={disabled} onClick={onClickAdd}>
          追加
        </button>
      </div>
    </>
  );
};
