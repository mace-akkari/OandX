import React from "react"
import './App.css'


function Square() {
  return <div className="square"></div>;
}

function OAndX() {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default OAndX;
