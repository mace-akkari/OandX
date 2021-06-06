import { NAUGHT, CROSS, EMPTY } from '../lib/constants'
import { Naught } from './Naught';
import { Cross } from './Cross'

export function Square({ position, value }) {
  return (
    <div className="square">
      {value == NAUGHT && <Naught />}
      {value == CROSS && <Cross />}
    </div>
  );
}