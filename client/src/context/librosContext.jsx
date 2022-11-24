import { useState, createContext, useContext, useEffect } from "react";
import {
    getLibroRequest,
    getLibroByIdRequest,
    getEditorialesRequest,
    getEditorialRequest,
    createLibroRequest,
    updateLibroRequest,
    deleteLibroRequest,
} from "../api/api.libro";

const contextLibro = createContext();

export const useLibros = () => {
    const context = useContext(contextLibro);
    return context;
};

export const LibroProvider = ({ children }) => {
    const [libros, setLibros] = useState([]);
    const [editoriales, setEditoriales] = useState([]);

    const getLibros = async () => {
        const result = await getLibroRequest();
        setLibros(result.data);
    };

    const getEditoriales = async () => {
        const result = await getEditorialesRequest();
        console.log(result);
        setEditoriales(result.data);
    };

    const getEditorial = async (id) => {
        const result = await getEditorialRequest(id);
        return result.data;
    };

    const getLibro = async (id) => {
        const result = await getLibroByIdRequest(id);
        console.log(result);
        return result.data;
    };

    const createLibro = async (usuario) => {
        const res = await createLibroRequest(usuario);
        setLibros([...libros, res.data]);
    };

    const deleteLibro = async (id) => {
        await deleteLibroRequest(id);
        setLibros(libros.filter((libro) => libro.idLibro !== id));
        //await getBodegas();
    };

    const updateLibro = async (id, user) => {
        await updateLibroRequest(id, user);
        const result = await getLibroRequest();
        setLibros(result.data);
    };

    useEffect(() => {
        getLibros();
        getEditoriales();
    }, []);

    return (
        <contextLibro.Provider
            value={{
                libros,
                editoriales,
                getEditorial,
                setLibros,
                getLibros,
                getLibro,
                createLibro,
                deleteLibro,
                updateLibro,
            }}
        >
            {children}
        </contextLibro.Provider>
    );
};
