import { Router } from "express"
import { convertNumberToWords } from "../controllers/number.controller"

const router = Router()

router.post("/number-to-words", convertNumberToWords)

export default router
