import { randomNumber } from './randomNumber';
import palette from '../../data/palette';

export const getRandomColor = (transparent = false): string => {
  const color = palette[randomNumber(0, palette.length)];

  if (transparent) {
    const transparent = randomNumber(20, 99);
    return `${color}${transparent}`;
  }

  return color;
};
