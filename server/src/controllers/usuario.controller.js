import { getConnectionSqlServer } from "../database/connection.js";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool.request().query("SELECT * FROM USUARIO");
        console.log(resultado);

        res.json(resultado.recordset);
    } catch (err) {
        console.log(err);
    }
};

export const getUsuarioSis = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .query("SELECT * FROM USUARIO_SISTEMA");
        console.log(resultado);

        res.json(resultado.recordset);
    } catch (err) {
        console.log(err);
    }
};
