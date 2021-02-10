import './App.css';
import HeaderHook from './Components/Header/HeaderHook'
// import MoviesComponent from './Components/Movies/MoviesComponent'
// import Hooks from './Components/HooksExample/Hooks'
import routes from './routes'
// import MoviesHook from './Components/Movies/MoviesHook'

function App() {
  return (
    <div className="App">
      <HeaderHook />
      {routes}
      {/* <MoviesHook /> */}
      {/* <MoviesComponent /> */}
      {/* <Hooks /> */}
    </div>
  );
}

export default App;
