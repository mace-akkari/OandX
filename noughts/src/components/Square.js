import { NAUGHT, CROSS, EMPTY } from '../lib/constants';
import { Naught } from './Naught';
import { Cross } from './Cross';

export function Square({ position, value, takeTurn }) {
  function handleClick() { 
    if(value === EMPTY) takeTurn(position)
  }
  
  return (
    <div className="square" onClick={handleClick}>
      {value === NAUGHT && <Naught />}
      {value === CROSS && <Cross />}
    </div>
  );
}