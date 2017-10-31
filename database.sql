create database registration;
use registration;


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

create table User_Course (
	user_id int,
	course_id int,
	Foreign key(user_id) references User(id),
	Foreign key(course_id) references Course(id)
);
