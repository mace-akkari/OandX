import { NAUGHT, CROSS, EMPTY } from './constants';

export function detectWinner(p) {
  if(p[0] === NAUGHT && p[1] === NAUGHT && p[2] === NAUGHT) return NAUGHT;
  if(p[3] === NAUGHT && p[4] === NAUGHT && p[5] === NAUGHT) return NAUGHT;
  if(p[6] === NAUGHT && p[7] === NAUGHT && p[8] === NAUGHT) return NAUGHT;

  if(p[0] === NAUGHT && p[3] === NAUGHT && p[6] === NAUGHT) return NAUGHT;
  if(p[1] === NAUGHT && p[4] === NAUGHT && p[7] === NAUGHT) return NAUGHT;
  if(p[2] === NAUGHT && p[5] === NAUGHT && p[8] === NAUGHT) return NAUGHT;

  if(p[0] === NAUGHT && p[4] === NAUGHT && p[8] === NAUGHT) return NAUGHT;
  if(p[2] === NAUGHT && p[4] === NAUGHT && p[6] === NAUGHT) return NAUGHT;

  if(p[0] === CROSS && p[1] === CROSS && p[2] === CROSS) return CROSS;
  if(p[3] === CROSS && p[4] === CROSS && p[5] === CROSS) return CROSS;
  if(p[6] === CROSS && p[7] === CROSS && p[8] === CROSS) return CROSS;

  if(p[0] === CROSS && p[3] === CROSS && p[6] === CROSS) return CROSS;
  if(p[1] === CROSS && p[4] === CROSS && p[7] === CROSS) return CROSS;
  if(p[2] === CROSS && p[5] === CROSS && p[8] === CROSS) return CROSS;

  if(p[0] === CROSS && p[4] === CROSS && p[8] === CROSS) return CROSS;
  if(p[2] === CROSS && p[4] === CROSS && p[6] === CROSS) return CROSS;
 
  if(p.every(position => position != EMPTY)) return "It is a draw";
}