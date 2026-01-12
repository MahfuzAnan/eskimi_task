import { Router } from "express"
import { calculateDays } from "../controllers/days.controller"

const router = Router()

router.post("/days-between", calculateDays)

export default router
