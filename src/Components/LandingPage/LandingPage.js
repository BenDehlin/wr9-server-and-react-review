import {Link} from 'react-router-dom'

const LandingPage = (props) => {
  console.log(props)
  return (
    <div>
      <p>Landing Page</p>
      <button onClick={() => props.history.push("/movies")}>
        Push to Movies
      </button>
      <Link to="/movies">Link to Movies</Link>
    </div>
  )
}

export default LandingPage
