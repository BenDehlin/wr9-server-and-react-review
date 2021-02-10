import {Component} from 'react'
import axios from 'axios'

class FullPageMovieClass extends Component{
    constructor(){
        super()
        this.state = {
            movie: null
        }
    }

    componentDidMount(){
        axios.get(`/api/movie/${this.props.match.params.movie_id}`)
        .then(res => {
            this.setState({
                movie: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
               <p>FullPageMovieClass</p>
               <p>the id of the movie is {this.props.match.params.movie_id}</p>
               {this.state.movie ? (
                   <div>
                       <p>{this.state.movie.name}</p>
                       <p>{this.state.movie.director}</p>
                   </div>
               ):(
                   <div></div>
               )}
            </div>
        )
    }
}

export default FullPageMovieClass