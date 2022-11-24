USE queleo;  
GO  
CREATE OR ALTER PROCEDURE addNewLibro
@nombre varchar(100),
@idEditorial int
AS
    SET NOCOUNT ON;  
    INSERT INTO LIBROS (nombreLibro, idEditorial)
	VALUES ( @nombre, @idEditorial)
GO


/********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE updateLibro
@id int,
@nombre varchar(100),
@idEditorial int
AS
    SET NOCOUNT ON;  
    UPDATE LIBROS SET 
    nombreLibro = @nombre,
    idEditorial =@idEditorial
	WHERE idLibro = @id
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllLibros
AS
    SET NOCOUNT ON;  
    SELECT * FROM LIBROS  
GO

/*********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getLibroById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM LIBROS WHERE idLibro = @id
GO

/*********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getEditorialById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM EDITORIALES WHERE idEditorial = @id
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllEditoriales
AS
    SET NOCOUNT ON;  
    SELECT * FROM EDITORIALES  
GO


/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE deleteLibro
@id int
AS
    DELETE FROM LIBROS WHERE idLibro=@id
GO  