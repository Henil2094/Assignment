CREATE TABLE student(
id int PRIMARY KEY,
name varchar(25),
age int DEFAULT 20);

ALTER TABLE student
ADD email varchar(30);

INSERT INTO student VALUES (1,'Hrutvik',22,'hrutvik.barot@gmail.com');
INSERT INTO student VALUES (2,'Dipen',23,'dipen.sutariya@gmail.com');
INSERT INTO student VALUES (3,'Darpal',21,'darpal.patel@gmail.com');
INSERT INTO student VALUES (4,'Aatish',22,'Aatish.patel@gmail.com');
 
select * from student;

SELECT * FROM student
WHERE age=22;

SELECT * FROM student
WHERE name='Hrutvik' AND age=22;

SELECT DISTINCT age FROM student;

SELECT * FROM student
ORDER BY age DESC;

SELECT * FROM student
WHERE name LIKE 'A%';

DELETE FROM student WHERE name='Aatish';

select * from student;






