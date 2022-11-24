import React from "react";
import FormUsuario from "../components/usuario/FormUsuario";
import ListUsuario from "../components/usuario/ListUsuario";

import "../layout/Contenido/Contenido.css";

function Usuarios() {
    return (
        <div>
            <FormUsuario />
            <ListUsuario />
        </div>
    );
}

export default Usuarios;
