import { Router } from "express";
import {
    loginUser,
    createNewUser,
    getUsers,
    getUserById,
    getCargos,
    getCargo,
    updateBodegaById,
    deleteBodegaById,
} from "../controllers/employee.controller.js";

const router = Router();

router.post("/login", loginUser);
router.post("/employees", createNewUser);
router.get("/employees", getUsers);
router.get("/cargos", getCargos);
router.get("/cargos/:id", getCargo);
router.get("/employees/:id", getUserById);
router.put("/employees/:id", updateBodegaById);
router.delete("/employees/:id", deleteBodegaById);

export default router;
