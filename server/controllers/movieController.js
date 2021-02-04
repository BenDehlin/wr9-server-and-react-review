const movies = [
    {id: 1, name: 'Star Wars', director: 'George Lucas'},
    {id: 2, name: 'Harry Potter', director: 'David Yates'},
    {id: 3, name: 'tenet', director: 'Christopher Nolan'}
]
let id = 4

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req, res) => {
        const {name, director} = req.body
        movies.push({
            name, director, id
        })
        // movies.push({
        //     ...req.body, id
        // })
        id++
        res.status(200).send(movies)
    },
    editMovie: (req, res) => {
        const {name, director} = req.body
        const {id} = req.params
        const movieIndex = movies.findIndex((e) => e.id === +id)
        movies[movieIndex] = {
            id,
            name: name || movies[movieIndex].name,
            director: director || movies[movieIndex].director
        }
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const movieIndex = movies.findIndex((e) => e.id === +req.params.id)
        movies.splice(movieIndex, 1)
        res.status(200).send(movies)
    }
}




// axios.delete(`/api/movies/2`)