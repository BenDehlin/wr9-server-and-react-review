import {useState} from 'react'

const AddMovieHook = (props) => {
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')

    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={director} onChange={(e) => setDirector(e.target.value)} />
            <button onClick={() => props.addMovie({name, director})}>Add Movie</button>
        </div>
    )
}

export default AddMovieHook