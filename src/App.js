import './App.css';
import Textfill from './components/Textfill';
import Navbar from './components/Navbar';
import About from './components/About';
import SectionLayout from './components/SectionLayout';
// import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
// import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
   <div className="container">
    <Routes>
          <Route element={<SectionLayout />}>
          <Route path='/' element={<Textfill />} />
    <Route path='/about' element={<About />} />
          </Route>
    </Routes>
  </div>
      </Router>
    </>
  );
}

export default App;
