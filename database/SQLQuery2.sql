create table student1(s_id int primary key, 
                      s_name varchar(20));

insert into student1 values(1, 'Henil');
insert into student1 values(2, 'Hrutvik');
insert into student1 values(3, 'Jay');
insert into student1 values(4, 'Darpal');
insert into student1 values(5, 'Dipen');


select * from student1

create table marks(school_id int primary key, s_id int, 
                       score int, status varchar(20));

insert into marks values(1004, 1, 23, 'fail');
insert into marks values(1012, 2, 97, 'pass');
insert into marks values(1020, 3, 100, 'pass');
insert into marks values(1030, 4, 88, 'pass');
insert into marks values(1040, 5,  16, 'fail');

select * from marks


create table details(address_city varchar(20), email_ID varchar(20), 
                      school_id int);

insert into details values('Uvarsad',  'jsingh@gmail.com', 
                                1020);
insert into details values('Kalol', 'praveen@gmail.com', 
                                1030);
insert into details values('Pune',     'rithvik@gmail.com', 
                                    1012);
insert into details values('Adalaj',   'om@gmail.com', 
                                 1111);
insert into details values('Gnagar', ' suraj@gmail.com',
                                 1008);

select * from details
						 

select s_name,score , status, address_city, email_id
from student1 s inner join marks m on
s.s_id = m.s_id inner join details d on 
d.school_id = m.school_id;

select s_name,score,status,email_ID
from student1 s left join marks m
on s.s_id = m.s_id left join details d on 
d.school_id = m.school_id;