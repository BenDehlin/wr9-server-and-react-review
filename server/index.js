require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const movieCtrl = require('./controllers/movieController')
const bookCtrl = require('./controllers/booksController')
const postCtrl = require('./controllers/postController')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('Database connected successfully')
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})


//AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)


//MOVIE ENDPOINTS
app.get('/api/movies', movieCtrl.getMovies)
app.get('/api/movie/:movie_id', movieCtrl.getMovie)
app.delete('/api/movies/:movie_id', movieCtrl.deleteMovie)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:movie_id', movieCtrl.editMovie)

//BOOK ENDPOINTS
app.get('/api/books', bookCtrl.getBooks)

//POST ENDPOINTS
app.get('/api/posts', postCtrl.getPosts)
app.post('/api/post', postCtrl.addPost)