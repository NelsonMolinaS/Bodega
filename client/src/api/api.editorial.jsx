import axios from "axios";

export const getEditorialRequest = async () => await axios.get("/editorial");

export const getEditorialByIdRequest = async (id) =>
    await axios.get("/editorial/" + id);

export const createEditorialRequest = async (editorial) =>
    await axios.post("/editorial", editorial);

export const updateEditorialRequest = async (id, editorial) =>
    await axios.put("/editorial/" + id, editorial);

export const deleteEditorialRequest = async (id) =>
    await axios.delete("/editorial/" + id);
