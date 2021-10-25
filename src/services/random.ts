const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const randomColor = (rgbMaxValue = 255, opacity = 0.5): string =>
  `rgba(${getRandomInt(rgbMaxValue)},${getRandomInt(rgbMaxValue)},${getRandomInt(rgbMaxValue)},${opacity})`;

export type RandomColorType = typeof randomColor;
