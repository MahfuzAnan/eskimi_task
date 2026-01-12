import request from "supertest"
import app from "../../app"
import { fetchTemperatureData } from "../../utils/weather.util"

jest.mock("../../utils/weather.util")

describe("POST /api/dhaka-temperature-stats", () => {

  test("returns valid stats", async () => {

    ;(fetchTemperatureData as jest.Mock).mockResolvedValue({
      mins: [19.5, 20.25],
      maxs: [29.75, 31.5]
    })

    const response = await request(app)
      .post("/api/dhaka-temperature-stats")
      .send({
        startDate: "2024-01-01",
        endDate: "2024-01-02"
      })

    expect(response.status).toBe(200)

    expect(response.body.min).toBe(19.5)
    expect(response.body.max).toBe(31.5)
    expect(response.body.average).toBe(25.25)

    expect(response.body.minText).toBe("positive nineteen point five zero")
    expect(response.body.maxText).toBe("positive thirty one point five zero")
    expect(response.body.averageText).toBe("positive twenty five point two five")
  })

  test("returns 400 when dates missing", async () => {
    const response = await request(app)
      .post("/api/dhaka-temperature-stats")
      .send({})

    expect(response.status).toBe(400)
  })

  test("returns 400 when util throws error", async () => {

    ;(fetchTemperatureData as jest.Mock).mockRejectedValue(new Error("fail"))

    const response = await request(app)
      .post("/api/dhaka-temperature-stats")
      .send({
        startDate: "2024-01-01",
        endDate: "2024-01-02"
      })

    expect(response.status).toBe(400)
  })

  test("returns 400 when date is in the future", async () => {
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 1)

  const yyyy = futureDate.getFullYear()
  const mm = String(futureDate.getMonth() + 1).padStart(2, "0")
  const dd = String(futureDate.getDate()).padStart(2, "0")

  const future = `${yyyy}-${mm}-${dd}`

  const response = await request(app)
    .post("/api/dhaka-temperature-stats")
    .send({
      startDate: "2024-01-01",
      endDate: future
    })
  expect(response.status).toBe(400)
})
})
