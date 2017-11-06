DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE groceries (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO groceries (quantity, description) VALUES (5, "frozen pizza");
INSERT INTO groceries (quantity, description) VALUES (10, "noosa yogurt");
INSERT INTO groceries (quantity, description) VALUES (2, "wine");
INSERT INTO groceries (quantity, description) VALUES (1, "iced coffe");
