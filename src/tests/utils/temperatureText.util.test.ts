import { temperatureToText } from "../../utils/temperatureText.util"

describe("temperatureToText", () => {

  test("positive decimal temperature", () => {
    const text = temperatureToText(5.4)
    expect(text).toBe("positive five point four zero")
  })

  test("negative decimal temperature", () => {
    const text = temperatureToText(-12.35)
    expect(text).toBe("minus twelve point three five")
  })

  test("zero temperature", () => {
    const text = temperatureToText(0)
    expect(text).toBe("positive zero")
  })

})
