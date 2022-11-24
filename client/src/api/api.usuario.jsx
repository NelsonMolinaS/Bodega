import axios from "axios";

export const getUsuarioRequest = async () => await axios.get("/employees");

export const getCargosRequest = async () => await axios.get("/cargos");

export const getCargoRequest = async (id) => await axios.get("/cargos/" + id);

export const getUsuarioByIdRequest = async (id) =>
    await axios.get("/employees/" + id);

export const createUsuarioRequest = async (usuario) =>
    await axios.post("/employees", usuario);

export const updateUsuarioRequest = async (id, usuario) =>
    await axios.put("/employees/" + id, usuario);

export const deleteUsuarioRequest = async (id) =>
    await axios.delete("/employees/" + id);
