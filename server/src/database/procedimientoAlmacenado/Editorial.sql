/* Obtener todas las bodegas */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllEditoriales
AS
    SET NOCOUNT ON;  
    SELECT * FROM EDITORIALES 
GO


/***********************************************/
/* Obtener bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getEditorialById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM EDITORIALES
	WHERE idEditorial = @id
GO


/***********************************************/
/* Crear bodega */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE addNewEditorial
@nombre varchar(100),
@autor varchar(100),
@editorial varchar(100)
AS
    SET NOCOUNT ON;  
    INSERT INTO EDITORIALES (nombre, autor, editorial)
	VALUES (@nombre, @autor, @editorial)
GO

/***********************************************/
/* Actualizar bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE updateEditorialById
@id int,
@nombre varchar(100),
@autor varchar(100),
@editorial varchar(100)
AS
    UPDATE EDITORIALES SET 
	nombre = @nombre, 
	autor = @autor, 
	editorial = @editorial 
	WHERE idEditorial = @id
GO

/***********************************************/
/* Borrar bodega por id */
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE deleteEditorial
@id int
AS
    DELETE FROM EDITORIALES WHERE idEditorial=@id
GO   