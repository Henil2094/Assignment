CREATE TABLE students(
id int PRIMARY KEY,
name varchar(25),
city varchar(15),
postalcode int,
age int DEFAULT 20);

INSERT INTO students VALUES (1,'Hrutvik','Ahmedabad',123456,22);
INSERT INTO students VALUES (2,'Dipen','Gnagar',235534,23);
INSERT INTO students VALUES (3,'Darpal','Dahegam',756324,21);
INSERT INTO students VALUES (4,'Aatish','Pune',987654,22);
 

CREATE PROCEDURE SelectAllStudent
AS
SELECT * FROM students
GO;

EXEC SelectAllStudent;

ALTER PROCEDURE SelectAllstudent @age int
AS
SELECT * FROM students WHERE age = @age

EXEC SelectAllstudent @age = 22;

ALTER PROCEDURE SelectAllstudents @city varchar(15), @postalcode varchar(25)
AS
SELECT * FROM students WHERE city = @city AND postalcode = @postalcode

EXEC SelectAllstudents @city = 'Ahmedabad', @PostalCode = 123456;

CREATE VIEW abc AS select id,name,city from students;
SELECT * FROM abc;

/*Difference between store and procedure
VIEW
->Does not accepts parameters
->Can contain only one single Select query.
->Can not perform modification to any table.
->Can be used (sometimes) as the target for Insert, update, delete queries.
Store Procedure
->Accept parameters
->Can contain several statement like if, else, loop etc.
->Can perform modification to one or several tables.
->Can not be used as the target for Insert, update, delete queries
*/