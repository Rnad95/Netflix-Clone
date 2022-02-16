
import ModalMovie from './components/ModalMovie/ModalMovie'

import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar2 from './components/Navbar/Navbar';
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
      <Navbar2 />
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addMovie' element={<ModalMovie />} />
        <Route path='/Favorite' element={<FavList />} />

      </Routes>
    </>
  );
}

export default App;
