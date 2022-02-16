
import ModalMovie from './components/ModalMovie/ModalMovie'

import './App.css';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/getMovies' element={<Movie />} /> */}
        <Route path='/addMovie' element={<ModalMovie />} />

      </Routes>
    </>
  );
}

export default App;
