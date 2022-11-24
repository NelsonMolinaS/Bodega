import React from "react";
import Rutas from "./Rutas";

import { Toaster } from "react-hot-toast";

import "./Contenido.css";

function Contenido() {
    return (
        <>
            <Rutas />
            <Toaster />
        </>
    );
}

export default Contenido;
