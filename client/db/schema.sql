--WILL BE USING SEQUELIZE. THIS IS TO TEST POSTS TO DB UNTIL MODELS ARE SETUP

CREATE DATABASE swipable_db;

USE swipable_db;

CREATE TABLE Users (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(30),
    zip_code INT NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Favorites (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    display_address VARCHAR(200),
    display_phone VARCHAR(15),
    category VARCHAR(100),
    rating INT,
    latitude INT,
    longitude INT,
    delivery BOOLEAN,
    is_closed BOOLEAN,
    PRIMARY KEY(id)
);