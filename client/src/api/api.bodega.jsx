import axios from "axios";

export const getBodegaRequest = async () => await axios.get("/bodegas");

export const getBodegaCountRequest = async () => await axios.get("/bodegas/");

export const getBodegaByIdRequest = async (id) =>
    await axios.get("/bodegas/" + id);

export const createBodegaRequest = async (bodega) =>
    await axios.post("/bodegas", bodega);

export const updateBodegaRequest = async (id, bodega) =>
    await axios.put("/bodegas/" + id, bodega);

export const deleteBodegaRequest = async (id) =>
    await axios.delete("/bodegas/" + id);
