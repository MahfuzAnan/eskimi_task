import { Request, Response } from "express"
import { daysBetweenDates } from "../utils/date.util"

export const calculateDays = (req: Request, res: Response): void => {
  const startDate = req.body?.startDate
  const endDate = req.body?.endDate

  if (typeof startDate !== "string" || typeof endDate !== "string") {
    res.status(400).json({
      message: "startDate and endDate must be provided as strings"
    })
    return
  }

  try {
    const days = daysBetweenDates(startDate, endDate)

    res.status(200).json({
      days
    })
  } catch {
    res.status(400).json({
      message: "Invalid date input"
    })
  }
}
