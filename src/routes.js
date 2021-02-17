import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import MoviesHook from './Components/Movies/MoviesHook'
import FullPageMovieClass from './Components/FullPageMovie/FullPageMovieClass'
import Books from './Components/Books/Books'
import AuthClass from './Components/Auth/AuthClass'


export default (
    <Switch>
        <Route exact path ='/' component={LandingPage} />
        <Route path='/movies' component={MoviesHook} />
        <Route path='/movie/:movie_id' component={FullPageMovieClass} />
        <Route path='/books' component={Books} />
        <Route path='/auth' component={AuthClass} />
    </Switch>
)