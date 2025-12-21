import Express from "express"
import { getUSER,deleterUSER } from "../controllers/userController.js";

const router = Express.Router()

router.get('/all',getUSER);
router.delete('/delete',deleterUSER);


export default router
