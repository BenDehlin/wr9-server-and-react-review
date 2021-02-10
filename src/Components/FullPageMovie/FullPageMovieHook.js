const FullPageMovie = (props) => {
    console.log(props)
  return (
    <div>
      <p>Full Page Movie</p>
      <p>The id of the movie is {props.match.params.movie_id}</p>
    </div>
  )
}

export default FullPageMovie
