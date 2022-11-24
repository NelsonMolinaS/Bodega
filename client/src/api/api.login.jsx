import axios from "axios";

export const getLoginRequest = async (datos) => {
    console.log(datos);
    const resultado = await axios.post("/login", datos);
    return resultado.data;
};

/* export const getBodegaByIdRequest = async (user,pass) =>
    await axios.get("/bodegas/" + id); */
