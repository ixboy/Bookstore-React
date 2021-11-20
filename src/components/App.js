import * as React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Books from './Books';
import Categories from './Categories';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
