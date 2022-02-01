import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
<NavBar>
    <Routes>
    <Route path="/" element={<Home />}></Route>
      
   <Route path="/About" element={<About />}></Route>

   <Route path="/Contact" element= {<Contact />}></Route>
    </Routes>
    </NavBar>
  );
}

export default App;
