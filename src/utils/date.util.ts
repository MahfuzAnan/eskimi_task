const isLeapYear = (year: number): boolean => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};

const daysInMonth = (year: number, month: number): number => {
  const days = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return days[month - 1];
};

const validateDate = (year: number, month: number, day: number): boolean => {
  if (month < 1 || month > 12) return false;
  if (day < 1) return false;
  if (day > daysInMonth(year, month)) return false;
  return true;
};

type ParsedDate = {
  year: number;
  month: number;
  day: number;
};

const parseDate = (dateString: string): ParsedDate => {
  const parts = dateString.split("-").map(Number);
  if (parts.length !== 3) {
    throw new Error("Invalid date format");
  }

  return {
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
};

const isAfter = (a: ParsedDate, b: ParsedDate): boolean => {
  if (a.year !== b.year) return a.year > b.year;
  if (a.month !== b.month) return a.month > b.month;
  return a.day > b.day;
};

export const daysBetweenDates = (
  startDate: string,
  endDate: string
): number => {
  let start = parseDate(startDate);
  let end = parseDate(endDate);

  if (
    !validateDate(start.year, start.month, start.day) ||
    !validateDate(end.year, end.month, end.day)
  ) {
    throw new Error("Invalid date value");
  }

  if (isAfter(start, end)) {
    const temp = start;
    start = end;
    end = temp;
  }

  let totalDays = 0;

  while (start.year < end.year) {
    totalDays += isLeapYear(start.year) ? 366 : 365;
    start.year++;
  }

  while (start.month < end.month) {
    totalDays += daysInMonth(start.year, start.month);
    start.month++;
  }

  totalDays += end.day - start.day;

  return totalDays;
};
