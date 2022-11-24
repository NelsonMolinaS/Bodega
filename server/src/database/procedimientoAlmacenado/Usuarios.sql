USE queleo;  
GO  
CREATE OR ALTER PROCEDURE addNewUser
@rut varchar(20),
@nombre varchar(100),
@apellido varchar(100),
@usuario varchar(100),
@passwrd varchar(100),
@idCargo int
AS
    SET NOCOUNT ON;  
    INSERT INTO EMPLEADOS (rut, nombre, apellido, usuario, passwrd, idCargo)
	VALUES (@rut, @nombre, @apellido, @usuario, @passwrd, @idCargo)
GO

/********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE updateUserByIdWithPass
@id int,
@rut varchar(20),
@nombre varchar(100),
@apellido varchar(100),
@usuario varchar(100),
@passwrd varchar(100),
@idCargo int
AS
    SET NOCOUNT ON;  
    UPDATE EMPLEADOS SET 
    rut =@rut,
    nombre = @nombre,
    apellido=@apellido,
    usuario =@usuario, 
    passwrd =@passwrd,
    idCargo =@idCargo
	WHERE idEmpleado = @id
GO

/********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE updateUserByIdWithOutPass
@id int,
@rut varchar(20),
@nombre varchar(100),
@apellido varchar(100),
@usuario varchar(100),
@idCargo int
AS
    SET NOCOUNT ON;  
    UPDATE EMPLEADOS SET 
    rut =@rut,
    nombre = @nombre,
    apellido=@apellido,
    usuario =@usuario,
    idCargo =@idCargo
	WHERE idEmpleado = @id
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllUsers
AS
    SET NOCOUNT ON;  
    SELECT * FROM EMPLEADOS  
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getPassById
@id int
AS
    SET NOCOUNT ON;  
    SELECT PASSWRD FROM EMPLEADOS WHERE idEmpleado = @id
GO

/*********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getUserById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM EMPLEADOS WHERE idEmpleado = @id
GO

/*********************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getCargoById
@id int
AS
    SET NOCOUNT ON;  
    SELECT * FROM CARGOS WHERE idCargo = @id
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getAllCargos
AS
    SET NOCOUNT ON;  
    SELECT * FROM CARGOS  
GO


/***********************************************************/
use queleo;
    SELECT passwrd
    FROM EMPLEADOS WHERE usuario = 'criss'
GO
/********************************************************/

USE queleo;  
GO  
CREATE OR ALTER PROCEDURE getLogin
@usuario varchar(100)
AS
    SET NOCOUNT ON;  
    SELECT * FROM EMPLEADOS WHERE usuario = @usuario
GO

/*******************************************************/
USE queleo;  
GO  
CREATE OR ALTER PROCEDURE deleteUser
@id int
AS
    DELETE FROM EMPLEADOS WHERE idEmpleado=@id
GO  