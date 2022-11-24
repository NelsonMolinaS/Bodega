// 35:11 video https://www.youtube.com/watch?v=ReK0kscoF8o
import sql from "mssql";
import mongoose from "mongoose";
import dotenv from "dotenv";
import conf from "../config.js";

dotenv.config();

/****************** SQL Server *****************/
const dbSettingSqlServer = {
    user: conf.dbUser,
    password: conf.dbPassword,
    server: conf.dbServer,
    database: conf.dbDatabase,
    options: {
        encrypt: true, // true para Microsoft Azure!!
        trustServerCertificate: true, // Pregunta si confío en el certificado del servidor de la base de datos, se pone true o sino no resultará.
    },
};

export const getConnectionSqlServer = async () => {
    try {
        const pool = await sql.connect(dbSettingSqlServer);

        // Probar si conecta a la bd, básicamente realiza una consulta
        /* const resultado = await pool.request().query("SELECT 1");
        console.log(resultado); */
        console.log("Si conecta");
        return pool;
    } catch (e) {
        console.log(e);
    }
};

export { sql };
/* getConnectionSqlServer(); -> Probar conexión*/
/***********************************************/

export const getConnectionMongo = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a mongo a ", db.connection.db);
        //return pool;
    } catch (e) {
        console.log(e);
    }
};
