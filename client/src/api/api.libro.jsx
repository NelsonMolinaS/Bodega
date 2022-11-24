import axios from "axios";

export const getLibroRequest = async () => await axios.get("/libros");

export const getEditorialesRequest = async () => await axios.get("/editorial");

export const getEditorialRequest = async (id) =>
    await axios.get("/editorial/" + id);

export const getLibroByIdRequest = async (id) =>
    await axios.get("/libros/" + id);

export const createLibroRequest = async (libro) =>
    await axios.post("/libros", libro);

export const updateLibroRequest = async (id, libro) =>
    await axios.put("/libros/" + id, libro);

export const deleteLibroRequest = async (id) =>
    await axios.delete("/libros/" + id);
