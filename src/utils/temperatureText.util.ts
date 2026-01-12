import { numberToWords } from "./numberToWords.util";

export const temperatureToText = (value: number): string => {
  const absValue = Math.abs(value);
  const text = numberToWords(absValue);

  if (value < 0) return `minus ${text}`;
  return `positive ${text}`;
};
