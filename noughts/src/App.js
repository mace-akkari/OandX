import React from "react"
import './App.css'
import { Square } from "./components/Square";
import { NAUGHT, CROSS, EMPTY } from "./lib/constants";


function OAndX() {
  const [state, setState] = React.useState({
   player: NAUGHT,
   positions:  [
    EMPTY, EMPTY, NAUGHT,
    EMPTY, CROSS, EMPTY,
    EMPTY, NAUGHT, EMPTY
  ]
})

  return (
    <div className="board-container">
      <div className="board">
        <Square position={0} value={state.positions[0]}/>
        <Square position={1} value={state.positions[1]}/>
        <Square position={2} value={state.positions[2]}/>
        <Square position={3} value={state.positions[3]}/>
        <Square position={4} value={state.positions[4]}/>
        <Square position={5} value={state.positions[5]}/>
        <Square position={6} value={state.positions[6]}/>
        <Square position={7} value={state.positions[7]}/>
        <Square position={8} value={state.positions[8]}/>
      </div>
    </div>
  );
}

export default OAndX;
