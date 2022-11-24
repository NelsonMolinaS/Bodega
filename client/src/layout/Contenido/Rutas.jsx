import React from "react";
import Inicio from "../../pages/Inicio";
import Bodegas from "../../pages/Bodegas";
import Libros from "../../pages/Libros";
import Usuarios from "../../pages/Usuarios";
import Editoriales from "../../pages/Editoriales";
import { BodegaProvider } from "../../context/bodegaContext";
import { UsuarioProvider } from "../../context/usuarioContext";
import { EditorialProvider } from "../../context/editorialContext";
import { LibroProvider } from "../../context/librosContext";
import { IniProvider } from "../../context/inicioContext";
//import Login from "../InicioSesion/Login";

import { useRoutes } from "react-router-dom";

const ruta = [
    {
        path: "/Inicio",
        element: (
            <IniProvider>
                <Inicio />
            </IniProvider>
        ),
    },
    {
        path: "/bodegas",
        element: (
            <BodegaProvider>
                <Bodegas />
            </BodegaProvider>
        ),
    },
    {
        path: "/bodegas/:id",
        element: (
            <BodegaProvider>
                <Bodegas />
            </BodegaProvider>
        ),
    },
    {
        path: "/libros",
        element: (
            <LibroProvider>
                <Libros />
            </LibroProvider>
        ),
    },
    {
        path: "/libros/:id",
        element: (
            <LibroProvider>
                <Libros />
            </LibroProvider>
        ),
    },
    {
        path: "/employees",
        element: (
            <UsuarioProvider>
                <Usuarios />
            </UsuarioProvider>
        ),
    },
    {
        path: "/employees/:id",
        element: (
            <UsuarioProvider>
                <Usuarios />
            </UsuarioProvider>
        ),
    },
    {
        path: "/editoriales",
        element: (
            <EditorialProvider>
                <Editoriales />
            </EditorialProvider>
        ),
    },
    {
        path: "/editoriales/:id",
        element: (
            <EditorialProvider>
                <Editoriales />
            </EditorialProvider>
        ),
    },
    {
        path: "*",
        element: (
            <IniProvider>
                <Inicio />
            </IniProvider>
        ),
    },
];

function Rutas() {
    const element = useRoutes(ruta);
    return <div>{element}</div>;
}

export default Rutas;
