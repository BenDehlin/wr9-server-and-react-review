const express = require('express')
const app = express()
const movieCtrl = require('./controllers/movieController')

app.use(express.json())

const port = 3333

app.get('/api/movies', movieCtrl.getMovies)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)

app.listen(port, () => console.log(`Server running on port ${port}`))