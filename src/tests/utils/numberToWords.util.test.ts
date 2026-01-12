import { numberToWords } from "../../utils/numberToWords.util"

describe("numberToWords utility", () => {
  test("converts single digit", () => {
    expect(numberToWords(5)).toBe("five")
  })

  test("converts two digit number", () => {
    expect(numberToWords(36)).toBe("thirty six")
  })

  test("converts teen number", () => {
    expect(numberToWords(15)).toBe("fifteen")
  })

  test("converts round tens", () => {
    expect(numberToWords(40)).toBe("forty")
  })

  test("converts hundreds without remainder", () => {
    expect(numberToWords(100)).toBe("one hundred")
  })

  test("converts hundreds with remainder", () => {
    expect(numberToWords(105)).toBe("one hundred five")
  })

  test("converts decimal with one digit", () => {
    expect(numberToWords(36.4)).toBe("thirty six point four zero")
  })

  test("converts decimal with two digits", () => {
    expect(numberToWords(12.34)).toBe("twelve point three four")
  })

  test("keeps trailing zero in decimals", () => {
    expect(numberToWords(1.2)).toBe("one point two zero")
  })

  test("throws error for negative numbers", () => {
    expect(() => numberToWords(-1)).toThrow()
  })

  test("throws error for number >= 1000", () => {
    expect(() => numberToWords(1000)).toThrow()
  })
})
