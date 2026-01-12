import { Request, Response } from "express"
import { daysBetweenDates } from "../utils/date.util"
import { fetchTemperatureData } from "../utils/weather.util"
import { calculateStats } from "../utils/temperature.util"
import { temperatureToText } from "../utils/temperatureText.util"

const todayString = (): string => {
  return new Date().toISOString().split("T")[0]
}

export const getTemperatureStats = async (req: Request, res: Response) => {
  const { startDate, endDate } = req.body

  if (!startDate || !endDate) {
    return res.status(400).json({ message: "startDate and endDate are required" })
  }

  const today = todayString()

  if (startDate > today || endDate > today) {
    return res.status(400).json({ message: "Dates cannot be in the future" })
  }

  try {
    daysBetweenDates(startDate, endDate)

    const { mins, maxs } = await fetchTemperatureData(startDate, endDate)

    const stats = calculateStats(mins, maxs)

    res.status(200).json({
      min: stats.min,
      max: stats.max,
      average: stats.average,
      minText: temperatureToText(stats.min),
      maxText: temperatureToText(stats.max),
      averageText: temperatureToText(stats.average)
    })
  } catch {
    res.status(400).json({ message: "Invalid input or data source error" })
  }
}
