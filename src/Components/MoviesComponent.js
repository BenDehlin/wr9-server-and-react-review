import { Component } from "react"
import axios from "axios"
import Movie from "./Movie"
import AddMovie from "./AddMovie"

class MoviesComponent extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios
      .get("/api/movies")
      .then((res) => {
        this.setState({
          movies: res.data,
        })
      })
      .catch(() => console.log("there was an error"))
  }

  deleteMovie = (id) => {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        this.setState({
          movies: res.data,
        })
      })
      .catch(() => console.log("there was an error"))
  }

  addMovie = (body) => {
    axios.post("/api/movies", body).then((res) => {
      this.setState({
        movies: res.data,
      })
    })
  }

  editMovie = (id, body) => {
    axios.put(`/api/movies/${id}`, body).then((res) => {
      this.setState({
        movies: res.data,
      })
    })
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie} />
        {this.state.movies.map((movie) => {
          return (
            <Movie
              movie={movie}
              deleteMovie={this.deleteMovie}
              editMovie={this.editMovie}
            />
          )
        })}
      </div>
    )
  }
}

export default MoviesComponent
