CREATE TABLE student2(
id int PRIMARY KEY,
name varchar(25),
age int DEFAULT 20,email varchar(30));



INSERT INTO student2 VALUES (1,'Hrutvik',22,'hrutvik.barot@gmail.com');
INSERT INTO student2 VALUES (2,'Dipen',23,'dipen.sutariya@gmail.com');
INSERT INTO student2 VALUES (3,'Darpal',21,'darpal.patel@gmail.com');
INSERT INTO student2 VALUES (4,'Aatish',22,'Aatish.patel@gmail.com');
 
select * from student2;

BEGIN TRANSACTION;  

UPDATE student2 SET age = 50 WHERE ID = 1;
SELECT * FROM student2;

ROLLBACK TRANSACTION;
SELECT * FROM student2;


BEGIN TRANSACTION; 
UPDATE student2 SET name='Ace' WHERE ID = 1;
SELECT * FROM student2;

COMMIT;


