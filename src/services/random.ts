const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const randomColor = (): string => `rgba(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)},0.5)`;

export type RandomColorType = typeof randomColor;
