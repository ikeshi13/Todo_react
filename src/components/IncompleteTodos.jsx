import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelite } = props;
  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={style}>
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelite(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
