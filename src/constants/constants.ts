import smileIco from '../assets/img/smileIco.png';
import ohIco from '../assets/img/ohIco.png';
import lostIco from '../assets/img/lostIco.png';
import wonIco from '../assets/img/wonIco.png';

export const gameAdjustments = {
  easy: {
    MAX_ROWS: 8,
    MAX_COLS: 8,
    NU_OF_BOMBS: 10,
  },
  norm: {
    MAX_ROWS: 16,
    MAX_COLS: 16,
    NU_OF_BOMBS: 40,
  },
  hard: {
    MAX_ROWS: 16,
    MAX_COLS: 32,
    NU_OF_BOMBS: 100,
  },
};

export const faceIco = [smileIco, ohIco, lostIco, wonIco];

export const initialLeaderBoard = {
  easy: [
    { player: 'Федя', winTime: 32 },
    { player: 'Артем', winTime: 44 },
    { player: 'Степа', winTime: 86 },
    { player: 'John', winTime: 111 },
    { player: 'Федя', winTime: 118 },
  ],
  norm: [
    { player: 'Федя', winTime: 86 },
    { player: 'Артем', winTime: 148 },
    { player: 'Степа', winTime: 149 },
    { player: 'Витя', winTime: 221 },
    { player: 'Федя', winTime: 228 },
  ],
  hard: [
    { player: 'Федя', winTime: 312 },
    { player: 'Артем', winTime: 314 },
    { player: 'Степа', winTime: 416 },
    { player: 'Гена', winTime: 517 },
    { player: 'Федя', winTime: 518 },
  ],
};
