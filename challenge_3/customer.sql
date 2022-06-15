CREATE DATABASE checkout;

USE checkout;

CREATE TABLE customers (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  custname varchar(50),
  email varchar(255),
  pass varchar(255)
);

CREATE TABLE shipping (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  line1 varchar(255),
  line2 varchar(255),
  city char(255),
  state char(2),
  zip int,
  phone int,
  customer int,
  FOREIGN KEY (customer) REFERENCES customers(id)
);

CREATE TABLE payment (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  expiration int(4),
  cvv int(4),
  zip int,
  customer int,
  FOREIGN KEY (customer) REFERENCES customers(id)
);

/* mysql -u root < customer.sql