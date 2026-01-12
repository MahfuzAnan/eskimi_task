const ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const integerToWords = (number: number): string => {
  if (number < 10) return ones[number];

  if (number < 20) return teens[number - 10];

  if (number < 100) {
    const tensDigit = Math.floor(number / 10);
    const onesDigit = number % 10;

    return onesDigit === 0
      ? tens[tensDigit - 2]
      : `${tens[tensDigit - 2]} ${ones[onesDigit]}`;
  }

  const hundredsDigit = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) return `${ones[hundredsDigit]} hundred`;

  return `${ones[hundredsDigit]} hundred ${integerToWords(remainder)}`;
};

export const numberToWords = (value: number): string => {
  if (value < 0 || value >= 1000) {
    throw new Error("Number out of range");
  }

  const fixedValue = value.toFixed(2);
  const [integerPart, decimalPart] = fixedValue.split(".");

  let result = integerToWords(Number(integerPart));

  if (decimalPart && decimalPart !== "00") {
    const decimalWords = decimalPart
      .split("")
      .map((digit) => ones[Number(digit)])
      .join(" ");

    result = `${result} point ${decimalWords}`;
  }

  return result;
};
