import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import MoviesHook from './Components/Movies/MoviesHook'
import FullPageMovieClass from './Components/FullPageMovie/FullPageMovieClass'


export default (
    <Switch>
        <Route exact path ='/' component={LandingPage} />
        <Route path='/movies' component={MoviesHook} />
        <Route path='/movie/:movie_id' component={FullPageMovieClass} />
    </Switch>
)