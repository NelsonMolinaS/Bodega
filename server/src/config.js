import { config } from "dotenv";

config(); // inicializar config del dotenv

export default {
    port: process.env.PORT_BODEGA || 4000,
    dbUser: process.env.USER_BD || "",
    dbPassword: process.env.PASSWORD_BD || "",
    dbServer: process.env.SERVER_BD || "",
    dbDatabase: process.env.DATABASE_BD || "",
};
