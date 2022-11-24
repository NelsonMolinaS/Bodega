export default {
    getAllBodegas: "SELECT * FROM BODEGA",
    deleteBodega: "DELETE FROM BODEGA WHERE id_bodega=@id",
    addNewBodega:
        "INSERT INTO bodega (nombre_bodega, cod_bodega, direccion_bodega) VALUES (@nombre_bodega, @cod_bodega, @direccion_bodega)",
    getBodegaById: "SELECT * FROM BODEGA WHERE id_bodega=@id",
    //getTotalBodega: "SELECT COUNT(*) AS cantidad FROM BODEGA",
    getTotalBodega: "SELECT COUNT(*) FROM BODEGA",
    updateBodegaById:
        "UPDATE BODEGA SET nombre_bodega = @nombre_bodega, cod_bodega = @cod_bodega, direccion_bodega = @direccion_bodega WHERE id_bodega = @id",
};
