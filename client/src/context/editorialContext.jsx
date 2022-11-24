import { useState, createContext, useContext, useEffect } from "react";
import {
    getEditorialRequest,
    getEditorialByIdRequest,
    createEditorialRequest,
    updateEditorialRequest,
    deleteEditorialRequest,
} from "../api/api.editorial";

const contextEditorial = createContext();

export const useEditorial = () => {
    const context = useContext(contextEditorial);
    return context;
};

export const EditorialProvider = ({ children }) => {
    const [editoriales, setEditoriales] = useState([]);

    const getEditoriales = async () => {
        const result = await getEditorialRequest();
        setEditoriales(result.data);
    };

    const getEditorial = async (id) => {
        const result = await getEditorialByIdRequest(id);
        return result.data;
    };

    const createEditorial = async (edit) => {
        const res = await createEditorialRequest(edit);
        setEditoriales([...editoriales, res.data]);
    };

    const deleteEditorial = async (id) => {
        await deleteEditorialRequest(id);
        setEditoriales(
            editoriales.filter((editorial) => editorial.idEditorial !== id)
        );
        //await getBodegas();
    };

    const updateEditorial = async (id, edit) => {
        await updateEditorialRequest(id, edit);
        const result = await getEditorialRequest();
        setEditoriales(result.data);
    };

    useEffect(() => {
        getEditoriales();
    }, []);

    return (
        <contextEditorial.Provider
            value={{
                editoriales,
                setEditoriales,
                getEditoriales,
                getEditorial,
                createEditorial,
                deleteEditorial,
                updateEditorial,
            }}
        >
            {children}
        </contextEditorial.Provider>
    );
};
