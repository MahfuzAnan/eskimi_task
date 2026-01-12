import { daysBetweenDates } from "../../utils/date.util"

describe("daysBetweenDates", () => {
  test("same date returns zero", () => {
    expect(daysBetweenDates("2024-01-01", "2024-01-01")).toBe(0)
  })

  test("calculates days within same month", () => {
    expect(daysBetweenDates("2024-01-01", "2024-01-10")).toBe(9)
  })

  test("calculates days across months", () => {
    expect(daysBetweenDates("2024-01-31", "2024-02-02")).toBe(2)
  })

  test("handles leap year", () => {
    expect(daysBetweenDates("2024-02-28", "2024-03-01")).toBe(2)
  })

  test("throws error on invalid date", () => {
    expect(() =>
      daysBetweenDates("2024-02-30", "2024-03-01")
    ).toThrow()
  })
})
