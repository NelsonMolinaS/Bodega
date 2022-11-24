/* Obtener todas las bodegas */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllBodegas
AS
    SET NOCOUNT ON;  
    SELECT * FROM BODEGAS 
GO


/***********************************************/
/* Obtener bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getBodegaById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM BODEGAS
	WHERE idBodega = @id
GO


/***********************************************/
/* Crear bodega */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE addNewBodega
@codBodega varchar(100),
@nombreBodega varchar(100),
@direccion varchar(100)
AS
    SET NOCOUNT ON;  
    INSERT INTO BODEGAS (codBodega, nombreBodega, direccion)
	VALUES (@codBodega, @nombreBodega, @direccion)
GO

/***********************************************/
/* Actualizar bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE updateBodegaById
@id int,
@codBodega varchar(100),
@nombreBodega varchar(100),
@direccion varchar(100)
AS
    UPDATE BODEGAS SET 
	codBodega = @codBodega, 
	nombreBodega = @nombreBodega, 
	direccion = @direccion 
	WHERE idBodega = @id
GO

/***********************************************/
/* Borrar bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE deleteBodega
@id int
AS
    DELETE FROM BODEGAS WHERE idBodega=@id
GO   



USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getCountBodegas
AS
    SET NOCOUNT ON;  
    SELECT COUNT(*) AS CANTIDAD
    FROM BODEGAS
GO