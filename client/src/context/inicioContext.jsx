import { useState, createContext, useContext, useEffect } from "react";
import { getUsuarioRequest } from "../api/api.usuario";
import { getLibroRequest, getEditorialesRequest } from "../api/api.libro";
import { getBodegaRequest, getBodegaCountRequest } from "../api/api.bodega";

const contextIni = createContext();

export const useIni = () => {
    const context = useContext(contextIni);
    return context;
};

export const IniProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [libros, setLibros] = useState([]);
    const [editoriales, setEditoriales] = useState([]);
    const [bodegas, setBodegas] = useState([]);
    const [bodegaCount, setBodegaCount] = useState([]);

    const getUsuarios = async () => {
        const result = await getUsuarioRequest();
        setUsuarios(result.data);
    };

    const getLibros = async () => {
        const result = await getLibroRequest();
        setLibros(result.data);
    };

    const getEditoriales = async () => {
        const result = await getEditorialesRequest();
        setEditoriales(result.data);
    };

    const getBodegas = async () => {
        const result = await getBodegaRequest();
        setBodegas(result.data);
    };

    const getCountBodega = async () => {
        const result = await getBodegaCountRequest();
        setBodegaCount(result.data);
    };

    useEffect(() => {
        getUsuarios();
        getLibros();
        getEditoriales();
        getBodegas();
        getCountBodega();
    }, []);

    return (
        <contextIni.Provider
            value={{
                libros,
                usuarios,
                editoriales,
                bodegas,
                bodegaCount,
            }}
        >
            {children}
        </contextIni.Provider>
    );
};
