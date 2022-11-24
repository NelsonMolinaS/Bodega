import { Router } from "express";
import {
    createNewLibro,
    getLibros,
    getEditoriales,
    getEditorial,
    getLibroById,
    updateLibroById,
    deleteLibroById,
} from "../controllers/libro.controller.js";

const router = Router();

router.post("/libros", createNewLibro);
router.get("/libros", getLibros);
router.get("/editorial", getEditoriales);
router.get("/editorial/:id", getEditorial);
router.get("/libros/:id", getLibroById);
router.put("/libros/:id", updateLibroById);
router.delete("/libros/:id", deleteLibroById);

export default router;
