import { Router } from "express"; // se importa el modulo Router de express
import {
    getBodegas,
    createNewBodega,
    getBodegasById,
    deleteBodegaById,
    updateBodegaById,
    getBodegasCount,
} from "../controllers/bodega.controller.js";

const router = Router();

router.get("/bodegas", getBodegas);
router.get("/bodegas/", getBodegasCount);
router.get("/bodegas/:id", getBodegasById);
router.post("/bodegas", createNewBodega);
router.delete("/bodegas/:id", deleteBodegaById);
router.put("/bodegas/:id", updateBodegaById);
//router.get("/countBodegas", getCountBodegas);

export default router;
