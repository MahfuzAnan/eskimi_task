import request from "supertest"
import app from "../../app"

describe("POST /api/number-to-words", () => {
  test("returns words for valid number", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({ number: 36 })

    expect(response.status).toBe(200)
    expect(response.body.text).toBe("thirty six")
  })

  test("returns words for decimal number", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({ number: 36.4 })

    expect(response.status).toBe(200)
    expect(response.body.text).toBe("thirty six point four zero")
  })

  test("returns 400 when number is missing", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({})

    expect(response.status).toBe(400)
  })

  test("returns 400 when number is not numeric", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({ number: "abc" })

    expect(response.status).toBe(400)
  })

  test("returns 400 when number is out of range", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({ number: 1000 })

    expect(response.status).toBe(400)
  })

  test("returns 400 when number has more than 2 decimal point", async () => {
    const response = await request(app)
      .post("/api/number-to-words")
      .send({ number: 36.635 })

    expect(response.status).toBe(400)
  })
})
