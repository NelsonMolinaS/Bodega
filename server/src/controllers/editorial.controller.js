import { getConnectionSqlServer, sql } from "../database/connection.js";
import procedureStorage from "../database/procedure.editorial.js";

export const getEditoriales = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllEditoriales);
        res.send(resultado.recordset);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};

export const getEditorialesById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.getEditorialById);

        // De esta manera se envian los resultados en formato json
        res.send(resultado.recordset[0]);
    } catch (err) {
        res.status(500);
        // res.send(error.message);
        //console.log(err);
    }
};

export const createNewEditorial = async (req, res) => {
    try {
        const { nombre, autor, editorial } = req.body;

        console.log(nombre, autor, editorial);

        const pool = await getConnectionSqlServer();

        const result = await pool
            .request()
            .input("nombre", sql.VarChar, nombre)
            .input("autor", sql.VarChar, autor)
            .input("editorial", sql.VarChar, editorial)
            .execute(procedureStorage.addNewEditorial);

        res.json(req.body);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};

export const updateEditorialById = async (req, res) => {
    try {
        const { nombre, autor, editorial } = req.body;
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("nombre", sql.VarChar, nombre)
            .input("autor", sql.VarChar, autor)
            .input("editorial", sql.VarChar, editorial)
            .input("id", id)
            .execute(procedureStorage.updateEditorialById);

        res.json({ nombre, autor, editorial });
    } catch (error) {
        console.log(err);
    }
};

export const deleteEditorialById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.deleteEditorial);

        res.send(resultado);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};
