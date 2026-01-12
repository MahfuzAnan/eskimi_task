import { Request, Response } from "express"
import { numberToWords } from "../utils/numberToWords.util"

export const convertNumberToWords = (req: Request, res: Response) => {
  const { number } = req.body

  if (number === undefined || typeof number !== "number") {
    return res.status(400).json({ message: "number is required and must be numeric" })
  }

  const numberAsString = number.toString()

  if (numberAsString.includes(".")) {
    const decimalPart = numberAsString.split(".")[1]
    if (decimalPart.length > 2) {
      return res.status(400).json({ message: "max 2 decimal point allowed" })
    }
  }

  try {
    const text = numberToWords(number)
    res.status(200).json({ text })
  } catch {
    res.status(400).json({ message: "Invalid number input" })
  }
}
