import React from "react";

const Square = (props: any) => (
  <button className={`square`} onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
