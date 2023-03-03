import { Router } from "express";
import { getExchange } from "../controller/controller.exchange.js";
const router=Router()
router.get('/:data', getExchange)
export default router
