UPDATE movies
SET (name, director) = ($2, $3)
WHERE movie_id = $1;
SELECT * FROM movies;