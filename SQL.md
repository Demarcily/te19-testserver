# SQL Stuff

sudo service mysql restart (Use everytime I start wsl)

sudo mysql -u root (Used to reach MySQL Monitor with admin, can be used to create another user with less access)

``` SQL
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password'; (To create a user on mysql)

GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost'; (Gives a user access to everything)
```

mysql -u liam -p ('u' is user, 'liam' is the username, and 'p' stands for password)

show databases (Shows databases, duh)

use 'insert database'; (to change database)

show tables; (Shows a table of different stuff, the newly created user can be seen at the bottom)

SELECT * FROM user; (Shows all information from table)

SELECT name from users; (Shows specific category in table)

describe 'insert' (use to describe a value from a tabel, such as user)

create database 'name' (to create a database. 'name' is the name of the database)

CREATE TABLE 'name' (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4'; ('name' is for the name of the table. AUTO_INCREMENT is so it counts for us when we add things to the table)

ALTER TABLE users ADD name VARCHAR (140) NOT NULL;

INSERT INTO users (name) VALUES ('Liam'); ()

ALTER TABLE users ADD password VARCHAR (255) NOT NULL;