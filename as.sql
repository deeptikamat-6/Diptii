create table student (
	id integer primary key,
	name text,
	age integer,
	course  text,
);

insert into student (name,age,course) values("Amit Sharma",20,"Computer Science"),
("Priya Singh",22,"Information Technology"),
("Ravi Kumar",19,"Electronics"),
("Neha Verma",21,"Mechanical"),
("Sohan Lal",23,"Civil Engineering"),
("Anjali Mehta",20,"Computer Science"),
("Vikas Gupta",22,"Information Technology"),
("Pooja Mishra",19,"Mechanical"),
("Rajesh Khanna",21,"Electronic"),
("Sneha Kapoor",22,"Civil Engineering");

select * from student where course="Information Technology";
update student set course="Mechanical" where id=3;
delete from student where name="Ravi Kumar";
