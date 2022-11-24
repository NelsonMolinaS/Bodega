import { useState, createContext, useContext, useEffect } from "react";
import {
    getBodegaRequest,
    getBodegaByIdRequest,
    createBodegaRequest,
    updateBodegaRequest,
    deleteBodegaRequest,
} from "../api/api.bodega";

const contextBod = createContext();

export const useBodegas = () => {
    const context = useContext(contextBod);
    return context;
};

export const BodegaProvider = ({ children }) => {
    const [bodegas, setBodegas] = useState([]);

    const getBodegas = async () => {
        const result = await getBodegaRequest();
        setBodegas(result.data);
    };

    const getBodega = async (id) => {
        console.log(id);
        const result = await getBodegaByIdRequest(id);
        console.log(result);
        return result.data;
    };

    const createBodega = async (bodega) => {
        const res = await createBodegaRequest(bodega);
        setBodegas([...bodegas, res.data]);
    };

    const deleteBodega = async (id) => {
        console.log(id);
        await deleteBodegaRequest(id);
        setBodegas(bodegas.filter((bodega) => bodega.idBodega !== id));
        //await getBodegas();
    };

    const updateBodega = async (id, bod) => {
        await updateBodegaRequest(id, bod);
        const result = await getBodegaRequest();
        setBodegas(result.data);
    };

    useEffect(() => {
        getBodegas();
    }, []);

    return (
        <contextBod.Provider
            value={{
                bodegas,
                setBodegas,
                getBodegas,
                getBodega,
                createBodega,
                updateBodega,
                deleteBodega,
            }}
        >
            {children}
        </contextBod.Provider>
    );
};
