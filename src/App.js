import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Movies from './Components/Movies/Movies';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Error from './Components/Error/Error';
import RandomMovies from './Components/RandomMovies/RandomMovies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Movies/>}/>
        <Route path="/movie/:movieID" element={<MovieDetails/>}/>
        <Route path="/random" element={<RandomMovies/>}/>
        {/* <Route path="/random/genre/:genre" element={<RandomMovie/>}/> */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
