import { useState } from "react"
import { useHistory } from "react-router-dom"

const MovieHook = ({ movie, deleteMovie, editMovie }) => {
    const {movie_id} = movie
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(movie.name)
  const [director, setDirector] = useState(movie.director)
  const { push } = useHistory()

  const handleSave = () => {
    editMovie(movie_id, { name, director })
    resetFields()
  }

  const resetFields = () => {
    setEditing(false)
    setName("")
    setDirector("")
  }

  return (
    <div key={movie_id}>
      {editing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{movie.name}</span>
          <button onClick={() => push(`/movie/${movie.movie_id}`)}>
            View Movie with id {movie.movie_id}
          </button>
          <button onClick={() => setEditing(true)}></button>
          <button onClick={() => deleteMovie(movie_id)}></button>
        </div>
      )}
    </div>
  )
}

export default MovieHook
