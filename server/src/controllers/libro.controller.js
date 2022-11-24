import { getConnectionSqlServer, sql } from "../database/connection.js";
import bcrypt from "bcrypt";
import procedureStorage from "../database/procedure.libro.js";
import queries from "../database/queries.usuarios.js";

export const createNewLibro = async (req, res) => {
    try {
        const { nombreLibro, editorial } = req.body;

        console.log(nombreLibro, editorial);

        const pool = await getConnectionSqlServer();

        const result = await pool
            .request()
            .input("nombre", sql.VarChar, nombreLibro)
            .input("idEditorial", sql.Int, editorial)
            .execute(procedureStorage.addNewLibro);

        res.json(req.body);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

export const getLibros = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllLibros);
        res.send(resultado.recordset);
    } catch (err) {
        console.log("Mierda error");
        res.status(500);
    }
};

export const getEditoriales = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllEditoriales);
        res.send(resultado.recordset);
    } catch (err) {
        console.log("Mierda error");
        res.status(500);
        //res.send(error.message);
    }
};

export const getLibroById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.getLibroById);

        console.log(resultado);
        // De esta manera se envian los resultados en formato json
        res.send(resultado.recordset[0]);
    } catch (err) {
        res.status(500);
        // res.send(error.message);
        //console.log(err);
    }
};

export const getEditorial = async (req, res) => {
    try {
        const { id } = req.params;

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

export const updateLibroById = async (req, res) => {
    try {
        const { nombreLibro, editorial } = req.body;
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const result = await pool
            .request()
            .input("nombre", sql.VarChar, nombreLibro)
            .input("idEditorial", sql.Int, editorial)
            .input("id", sql.Int, id)
            .execute(procedureStorage.updateLibro);

        res.json({ nombreLibro, editorial });
    } catch (error) {
        //console.log(err);
    }
};

export const deleteLibroById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.deleteLibro);
        res.send(resultado);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};
