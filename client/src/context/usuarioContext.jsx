import { useState, createContext, useContext, useEffect } from "react";
import {
    getUsuarioRequest,
    getUsuarioByIdRequest,
    getCargosRequest,
    getCargoRequest,
    createUsuarioRequest,
    updateUsuarioRequest,
    deleteUsuarioRequest,
} from "../api/api.usuario";

const contextUser = createContext();

export const useUsuarios = () => {
    const context = useContext(contextUser);
    return context;
};

export const UsuarioProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargos, setCargos] = useState([]);

    const getUsuarios = async () => {
        const result = await getUsuarioRequest();
        setUsuarios(result.data);
    };

    const getCargos = async () => {
        const result = await getCargosRequest();
        setCargos(result.data);
    };

    const getCargo = async (id) => {
        const result = await getCargoRequest(id);
        return result.data;
    };

    const getUsuario = async (id) => {
        const result = await getUsuarioByIdRequest(id);
        return result.data;
    };

    const createUsuario = async (usuario) => {
        const res = await createUsuarioRequest(usuario);
        setUsuarios([...usuarios, res.data]);
    };

    const deleteUsuario = async (id) => {
        await deleteUsuarioRequest(id);
        setUsuarios(usuarios.filter((usuario) => usuario.idEmpleado !== id));
        //await getBodegas();
    };

    const updateUsuario = async (id, user) => {
        await updateUsuarioRequest(id, user);
        const result = await getUsuarioRequest();
        setUsuarios(result.data);
    };

    useEffect(() => {
        getUsuarios();
        getCargos();
    }, []);

    return (
        <contextUser.Provider
            value={{
                usuarios,
                cargos,
                getCargo,
                setUsuarios,
                getUsuarios,
                getUsuario,
                createUsuario,
                deleteUsuario,
                updateUsuario,
            }}
        >
            {children}
        </contextUser.Provider>
    );
};
