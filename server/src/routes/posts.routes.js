import { Router } from "express"; // se importa el modulo Router de express
import {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts,
    getPost,
} from "../controllers/posts.controllers.js";
/*
get = obtener
post = crear
put = actualizar
delete = eliminar
*/

const router = Router();
// router. metodo get retornara algo, en este caso un hello world
router.get("/", (req, res) => res.send("Hello World"));

router.get("/posts", getPosts);
router.post("/posts", createPosts);
router.put("/posts", updatePosts);
router.delete("/posts", deletePosts);
router.get("/posts/:id", getPost);

export default router;
