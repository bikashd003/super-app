import React from "react";

const Genre = (props) => {
  return (
    <>
      <div className="selected-type">
        <span>{props.type}</span>
        <button onClick={props.onClick}>x</button>
      </div>
    </>
  );
};

export default Genre;
