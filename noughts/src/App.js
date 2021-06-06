import React from "react";
import "./App.css";
import { Square } from "./components/Square";
import { NAUGHT, CROSS, EMPTY } from "./lib/constants";
import { detectWinner } from "./lib/detectWinner";
import { Result } from "./components/Result";

function OAndX() {
  const [state, setState] = React.useState({
    player: NAUGHT,
    positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  });

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === NAUGHT ? CROSS : NAUGHT,
      positions,
    });
  }

  function reset() {
    setState({
      player: NAUGHT,
      positions: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
      ]
    })
  }

  const winner = detectWinner(state.positions);

  return (
    <div className="board-container">
      <div className="board">
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
}

export default OAndX;
