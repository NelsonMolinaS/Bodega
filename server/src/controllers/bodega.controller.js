import { getConnectionSqlServer, sql } from "../database/connection.js";
import procedureStorage from "../database/procedure.bodega.js";

export const getBodegas = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllBodegas);
        res.send(resultado.recordset);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};

export const getBodegasCount = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getCountBodegas);
        res.send(resultado.recordset);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};

export const getBodegasById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.getBodegaById);

        // De esta manera se envian los resultados en formato json
        res.send(resultado.recordset[0]);
    } catch (err) {
        res.status(500);
        // res.send(error.message);
        //console.log(err);
    }
};

export const createNewBodega = async (req, res) => {
    try {
        const { nombreBodega, codBodega, direccion } = req.body;

        const pool = await getConnectionSqlServer();

        const result = await pool
            .request()
            .input("codBodega", sql.VarChar, codBodega)
            .input("nombreBodega", sql.VarChar, nombreBodega)
            .input("direccion", sql.VarChar, direccion)
            .execute(procedureStorage.addNewBodega);

        res.json(req.body);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};

export const updateBodegaById = async (req, res) => {
    try {
        const { nombreBodega, codBodega, direccion } = req.body;
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("codBodega", sql.VarChar, codBodega)
            .input("nombreBodega", sql.VarChar, nombreBodega)
            .input("direccion", sql.VarChar, direccion)
            .input("id", id)
            .execute(procedureStorage.updateBodegaById);

        res.json({ nombreBodega, codBodega, direccion });
    } catch (error) {
        console.log(err);
    }
};

export const deleteBodegaById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.deleteBodega);

        res.send(resultado);
    } catch (err) {
        res.status(500);
        //res.send(error.message);
        //console.log(err);
    }
};
