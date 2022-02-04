create table iteam(
id int,
name varchar(20),
price int
);

insert into iteam values(1,'coffee',80);
insert into iteam values(2,'tea',10);
insert into iteam values(3,'soap',30);
insert into iteam values(4,'chocolate',120);

select * from iteam;

SELECT COUNT(name) AS Total FROM iteam;
SELECT MAX(price) AS MaxPrice FROM iteam;
SELECT MIN(price) AS MinPrice FROM iteam;
SELECT AVG(price) AS AvgPrice FROM iteam;
SELECT REVERSE(name) FROM iteam;
SELECT SUBSTRING(name, 2, 2) AS SubtractString FROM iteam;
SELECT Sum(price) AS SumOfPrice FROM iteam;
SELECT LEFT(name, 2) AS ExtractString FROM iteam;
SELECT RIGHT(name, 3) AS ExtractString FROM iteam;
SELECT LOWER(name) FROM iteam;
SELECT UPPER(name) FROM iteam;


