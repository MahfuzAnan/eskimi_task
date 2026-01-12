import { Router } from "express"
import { getTemperatureStats } from "../controllers/temperature.controller"

const router = Router()

router.post("/dhaka-temperature-stats", getTemperatureStats)

export default router
