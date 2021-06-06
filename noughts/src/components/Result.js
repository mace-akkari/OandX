import { NAUGHT, CROSS } from "../lib/constants"

export function Result({ winner, reset }) {
  return (
    <div className="result">
      {winner === NAUGHT && 'Naughts won the game'}
      {winner === CROSS && 'Crosses won the game'}
      {winner === 'It is a draw' && 'It is a draw'}
      <button onClick={reset}>Reset</button>
    </div>
  );
}