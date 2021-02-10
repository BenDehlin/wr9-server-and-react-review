// const movies = [
//     {id: 1, name: 'Star Wars', director: 'George Lucas'},
//     {id: 2, name: 'Harry Potter', director: 'David Yates'},
//     {id: 3, name: 'tenet', director: 'Christopher Nolan'}
// ]
// let id = 4

module.exports = {
    getMovies: (req, res) => {
        const db = req.app.get('db')
        db.movies.get_movies().then((movies) => {
            res.status(200).send(movies)
        })
        // res.status(200).send(movies)
    },
    getMovie: (req, res) => {
        const db = req.app.get('db')
        const {movie_id} = req.params
        db.movies.get_movie(movie_id).then(movies => {
            res.status(200).send(movies[0])
        })
    },
    addMovie: (req, res) => {
        const db = req.app.get('db')
        const {name, director} = req.body
        db.movies.add_movie(name, director)
        .then((movies) => {
            res.status(200).send(movies)
        })
        // db.movies.add_movie({name, director})
        // const {name, director} = req.body
        // movies.push({
        //     name, director, id
        // })
        // id++
        // res.status(200).send(movies)
    },
    editMovie: (req, res) => {
        const db = req.app.get('db')
        const {name, director} = req.body
        const {movie_id} = req.params
        db.movies.edit_movie(movie_id, name, director)
        .then((movies) => {
            res.status(200).send(movies)
        })
        // const {name, director} = req.body
        // const {id} = req.params
        // const movieIndex = movies.findIndex((e) => e.id === +id)
        // movies[movieIndex] = {
        //     id,
        //     name: name || movies[movieIndex].name,
        //     director: director || movies[movieIndex].director
        // }
        // res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const db = req.app.get('db')
        const {movie_id} = req.params
        db.movies.delete_movie(movie_id)
        .then((movies) => {
            res.status(200).send(movies)
        })
        // const movieIndex = movies.findIndex((e) => e.id === +req.params.id)
        // movies.splice(movieIndex, 1)
        // res.status(200).send(movies)
    }
}




// axios.delete(`/api/movies/2`)