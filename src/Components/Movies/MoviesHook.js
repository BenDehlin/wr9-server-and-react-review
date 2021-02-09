import { useState, useEffect } from "react"
import axios from "axios"
import Movie from "../Movie/Movie"
// import AddMovie from "../AddMovie/AddMovie"
import AddMovieHook from '../AddMovie/AddMovieHook'

const MoviesHook = (props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => {
        setMovies(res.data)
      })
      .catch(() => console.log("there was an error"))
  }, [])

  const deleteMovie = (movie_id) => {
    axios
      .delete(`/api/movies/${movie_id}`)
      .then((res) => {
        setMovies(res.data)
      })
      .catch(() => console.log("there was an error"))
  }

  const addMovie = (body) => {
    axios
      .post("/api/movies", body)
      .then((res) => setMovies(res.data))
      .catch(() => console.log("there was an error"))
  }

  const editMovie = (movie_id, body) => {
    axios
      .put(`/api/movies/${movie_id}`, body)
      .then((res) => setMovies(res.data))
      .catch(() => console.log("there was an error"))
  }

  return (
    <div>
      <AddMovieHook addMovie={addMovie} />
      {/* <AddMovie addMovie={addMovie} /> */}
      {movies.map((movie) => {
        return (
          <Movie
            movie={movie}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
          />
        )
      })}
    </div>
  )
}

export default MoviesHook