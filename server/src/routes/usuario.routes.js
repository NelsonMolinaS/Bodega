import { Router } from "express"; // se importa el modulo Router de express
import {
    getUsuarios,
    getUsuarioSis,
} from "../controllers/usuario.controller.js";

const router = Router();

router.get("/user", getUsuarios);
router.get("/userSis", getUsuarioSis);

export default router;
