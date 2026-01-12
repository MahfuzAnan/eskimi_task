import request from "supertest"
import app from "../../app"

describe("POST /api/days-between", () => {
  test("returns number of days", async () => {
    const response = await request(app)
      .post("/api/days-between")
      .send({
        startDate: "2024-01-01",
        endDate: "2024-01-10"
      })

    expect(response.status).toBe(200)
    expect(response.body.days).toBe(9)
  })

  test("returns 400 for missing input", async () => {
    const response = await request(app)
      .post("/api/days-between")
      .send({})

    expect(response.status).toBe(400)
  })

  test("returns 400 for invalid date", async () => {
    const response = await request(app)
      .post("/api/days-between")
      .send({
        startDate: "2024-02-30",
        endDate: "2024-03-01"
      })

    expect(response.status).toBe(400)
  })
})
