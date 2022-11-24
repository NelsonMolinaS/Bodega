import { getConnectionSqlServer, sql } from "../database/connection.js";
import bcrypt from "bcrypt";
import procedureStorage from "../database/procedure.usuario.js";
import queries from "../database/queries.usuarios.js";

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log("llego bien ", username, password);

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("usuario", username)
            .execute(procedureStorage.getLogin);

        console.log(resultado.recordset[0].passwrd);
        if (await bcrypt.compare(password, resultado.recordset[0].passwrd)) {
            return res.status(201).send(resultado.recordset[0]);
        } else {
            return res.status(409).send("Usuario o contraseña incorretos");
        }

        //res.send(resultado.recordset)
    } catch (err) {
        console.log("Mierda error en login");
        res.status(500);
        //res.send(error.message);
    }
};

export const createNewUser = async (req, res) => {
    try {
        const { rut, nombre, apellido, usuario, contrasena, cargo } = req.body;
        console.log(rut, nombre, apellido, usuario, contrasena, cargo);
        const pool = await getConnectionSqlServer();

        const encryptedContrasena = await bcrypt.hash(contrasena, 10);

        const result = await pool
            .request()
            .input("rut", sql.VarChar, rut)
            .input("nombre", sql.VarChar, nombre)
            .input("apellido", sql.VarChar, apellido)
            .input("usuario", sql.VarChar, usuario)
            .input("passwrd", sql.VarChar, encryptedContrasena)
            .input("idCargo", sql.Int, cargo)
            .execute(procedureStorage.addNewUser);

        console.log("first");
        res.json(req.body);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

export const getUsers = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllUsers);
        res.send(resultado.recordset);
    } catch (err) {
        console.log("Mierda error");
        res.status(500);
        //res.send(error.message);
    }
};

export const getCargos = async (req, res) => {
    try {
        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .execute(procedureStorage.getAllCargos);
        res.send(resultado.recordset);
    } catch (err) {
        console.log("Mierda error");
        res.status(500);
        res.send(error.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.getUserById);

        // De esta manera se envian los resultados en formato json
        res.send(resultado.recordset[0]);
    } catch (err) {
        res.status(500);
        // res.send(error.message);
        //console.log(err);
    }
};

export const getCargo = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.getCargoById);

        // De esta manera se envian los resultados en formato json
        res.send(resultado.recordset[0]);
    } catch (err) {
        res.status(500);
        // res.send(error.message);
        //console.log(err);
    }
};

export const updateBodegaById = async (req, res) => {
    try {
        const { rut, nombre, apellido, usuario, contrasena, cargo } = req.body;
        const { id } = req.params;
        console.log(rut, nombre, apellido, usuario, contrasena, cargo);

        const pool = await getConnectionSqlServer();

        const password = await pool
            .request()
            .input("id", sql.Int, id)
            .execute(procedureStorage.getPassById);

        if (password.recordset[0].PASSWRD == contrasena) {
            const result = await pool
                .request()
                .input("rut", sql.VarChar, rut)
                .input("nombre", sql.VarChar, nombre)
                .input("apellido", sql.VarChar, apellido)
                .input("usuario", sql.VarChar, usuario)
                .input("idCargo", sql.Int, cargo)
                .input("id", sql.Int, id)
                .execute(procedureStorage.updateUserByIdWithOutPass);
        } else {
            const encryptedContrasena = await bcrypt.hash(contrasena, 10);

            const result = await pool
                .request()
                .input("rut", sql.VarChar, rut)
                .input("nombre", sql.VarChar, nombre)
                .input("apellido", sql.VarChar, apellido)
                .input("usuario", sql.VarChar, usuario)
                .input("passwrd", sql.VarChar, encryptedContrasena)
                .input("idCargo", sql.Int, cargo)
                .input("id", sql.Int, id)
                .execute(procedureStorage.updateUserByIdWithPass);
        }

        res.json({ rut, nombre, apellido, usuario });
    } catch (error) {
        //console.log(err);
    }
};

export const deleteBodegaById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnectionSqlServer();

        const resultado = await pool
            .request()
            .input("id", id)
            .execute(procedureStorage.deleteUser);
        res.send(resultado);
    } catch (err) {
        res.status(500);
        res.send(error.message);
        //console.log(err);
    }
};
