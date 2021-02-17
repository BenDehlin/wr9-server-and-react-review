import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const FullPageMovie = (props) => {
  const [movie, setMovie] = useState(null)
  const { movie_id } = useParams()

  useEffect(() => {
    axios
      .get(`/api/movie/${movie_id}`)
      .then(({ data }) => setMovie(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <p>Full Page Movie</p>
      <p>The id of the movie is {props.match.params.movie_id}</p>
      {movie && (
        <div>
          <p>{movie.name}</p>
          <p>{movie.director}</p>
        </div>
      )}
    </div>
  )
}

export default FullPageMovie
