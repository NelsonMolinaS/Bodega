import { Router } from "express"; // se importa el modulo Router de express
import {
    getEditoriales,
    createNewEditorial,
    getEditorialesById,
    deleteEditorialById,
    updateEditorialById,
    //getCountEditoriales,
} from "../controllers/editorial.controller.js";

const router = Router();

router.get("/editorial", getEditoriales);
router.get("/editorial/:id", getEditorialesById);
router.post("/editorial", createNewEditorial);
router.delete("/editorial/:id", deleteEditorialById);
router.put("/editorial/:id", updateEditorialById);
//router.get("/countEditoriales", getCountEditoriales);

export default router;
