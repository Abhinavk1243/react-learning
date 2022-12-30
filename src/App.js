import './App.css';
import Textfill from './components/Textfill';
import Navbar from './components/Navbar';
import About from './components/About';
import SectionLayout from './components/SectionLayout';
import React,{useState} from 'react';
// import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Table from './components/Table';

function App() {
  const [mode,setMode]= useState('dark')
  const toggleMode =()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
   

   <div className="container">
    <Routes>
          <Route element={<SectionLayout />}>
          <Route path='/' element={<Textfill mode={mode}/>} />
    <Route path='/about' element={<About />} />
    <Route path='/database' element={<Table/>} />
          </Route>
    </Routes>
  </div>
      </Router>
    </>
  );
}

export default App;
