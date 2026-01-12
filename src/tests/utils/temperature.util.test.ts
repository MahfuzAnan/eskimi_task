import { calculateStats } from "../../utils/temperature.util"

describe("calculateStats", () => {

  test("calculates min, max and average", () => {
    const mins = [20.25, 19.88, 21.10]
    const maxs = [30.75, 29.44, 32.90]

    const result = calculateStats(mins, maxs)

    expect(result.min).toBe(19.88)
    expect(result.max).toBe(32.9)
    expect(result.average).toBe(25.72)
  })

  test("rounds average to two decimals correctly", () => {
    const mins = [10.11, 10.12, 10.13]
    const maxs = [11.14, 11.15, 11.16]

    const result = calculateStats(mins, maxs)

    expect(result.average).toBe(10.63)
  })

  test("throws error when arrays are empty", () => {
    expect(() => calculateStats([], [])).toThrow()
  })

})
