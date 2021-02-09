-- INSERT INTO movies (name, director)
-- VALUES (${name}, ${director});

INSERT INTO movies (name, director)
VALUES ($1, $2);
SELECT * FROM movies;