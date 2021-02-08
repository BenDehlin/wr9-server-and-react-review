import './App.css';
import Header from './Components/Header/Header'
// import MoviesComponent from './Components/Movies/MoviesComponent'
// import Hooks from './Components/HooksExample/Hooks'
import MoviesHook from './Components/Movies/MoviesHook'

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesHook />
      {/* <MoviesComponent /> */}
      {/* <Hooks /> */}
    </div>
  );
}

export default App;
