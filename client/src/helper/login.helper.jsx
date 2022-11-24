import { getLoginRequest } from "../api/api.login";

export const getLogin = async (datos) => {
    console.log(datos);
    const resultado = await getLoginRequest(datos);
    console.log(resultado);
    return resultado;
    /*const result = await getBodegaRequest(); */
};
