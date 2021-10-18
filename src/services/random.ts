const opacity = 0.5;
const rgbMaxValue = 255;
const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const randomColor = (): string => `rgba(${getRandomInt(rgbMaxValue)},${getRandomInt(rgbMaxValue)},${getRandomInt(rgbMaxValue)},${opacity})`;

export type RandomColorType = typeof randomColor;
