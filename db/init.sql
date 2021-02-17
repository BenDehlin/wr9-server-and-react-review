DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users;

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    director VARCHAR(50)
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    author VARCHAR(50)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(250),
    password VARCHAR(2500)
);