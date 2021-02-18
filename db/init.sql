DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS posts;
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

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    post_title VARCHAR(50),
    post_content VARCHAR (2000)
);