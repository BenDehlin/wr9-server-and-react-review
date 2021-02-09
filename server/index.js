require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const movieCtrl = require('./controllers/movieController')
const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('Database connected successfully')
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})

app.get('/api/movies', movieCtrl.getMovies)
app.delete('/api/movies/:movie_id', movieCtrl.deleteMovie)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:movie_id', movieCtrl.editMovie)
