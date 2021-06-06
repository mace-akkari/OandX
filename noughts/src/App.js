import React from "react"
import './App.css'
import { Naught } from "./components/Naught"
import { Cross } from "./components/Cross"
import { NAUGHT, CROSS, EMPTY } from "./lib/constants";


function Square() {
  return <div className="square"></div>;
}


function OAndX() {
  const player = NAUGHT;
  const positions = [
    EMPTY, EMPTY, NAUGHT,
    EMPTY, CROSS, EMPTY,
    EMPTY, NAUGHT, EMPTY
  ];
  return (
    <div className="board-container">
      <div className="board">
        <Square position={0} />
        <Square position={1} />
        <Square position={2} />
        <Square position={3} />
        <Square position={4} />
        <Square position={5} />
        <Square position={6} />
        <Square position={7} />
        <Square position={8} />
      </div>
    </div>
  );
}

export default OAndX;
