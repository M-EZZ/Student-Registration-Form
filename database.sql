create database student_registration;
use student_registration;


create table Department (
	id int auto_increment,
	name varchar(50) unique not null,
	description text(200),
	primary key(id)
);

create table User (
	id int auto_increment,
	email varchar(30) unique not null,
	username varchar(30) unique not null,
	password varchar(30) not null,
	registration_date timestamp,
	department_id int,
	primary key(id),
	Foreign key(department_id) references Department(id)
);

create table Course (
	id int auto_increment,
	name varchar(30) unique not null,
	description text(200),
	instructor_name varchar(30),
	credit_hours int,
	department_id int,
	primary key(id),
	Foreign key(department_id) references Department(id)
);


insert into Department(id, name, description) values (NULL, 'Computer', 'Computer Department Description');
insert into Department(id, name, description) values (NULL, 'Communication', 'Communication Department Description');
insert into Department(id, name, description) values (NULL, 'Mechanics', 'Mechanics Department Description');
insert into Department(id, name, description) values (NULL, 'Architecture', 'Architecture Department Description');

insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Data Structure', 'Data Structure Course Info', 'Amr Almasry', 3, 1);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Database', 'Database Course Info', 'Yasser Fouad', 4, 1);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Algorithms', 'Algorithms Course Info', 'Amr Almasry', 3, 1);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Programming', 'Programming Course Info', 'Saleh Alshehaby', 3, 1);

insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Signals and Systems', 'Signals and Systems Course Info', 'Rezk', 2, 2);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'DSP', 'DSP Course Info', 'Rezk', 2, 2);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Analogue Communication', 'Analogue Communication Course Info', 'Rezk', 3, 2);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Communication Systems ', 'Communication Systems Course Info', 'Noha', 3, 2);

insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Mechanics', 'Mechanics Course Info', 'Alqaranshawy', 4, 3);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Statics', 'Statics Course Info', 'Tarek Alqaddy', 3, 3);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Dynamics', 'Dynamics Course Info', 'Mohamed Ezz', 3, 3);

insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Architecture Design', 'Architecture Design Course Info', 'Youssef Fares', 3, 4);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Visual Arts', 'Visual Arts Course Info', 'Mahmoud Magdy', 4, 4);
insert into Course(id, name, description, instructor_name, credit_hours, department_id) values
(NULL, 'Design Computing', 'Design Computing Course Info', 'Mohamed Akl', 3, 4);
