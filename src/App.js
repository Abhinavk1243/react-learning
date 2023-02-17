import './App.css';
import Textfill from './components/Textfill';
import Navbar from './components/Navbar';
import About from './components/About';
import SectionLayout from './components/SectionLayout';
import Admin from './components/Admin';
import React,{useState} from 'react';
import Form from './components/Form';
// import ReactDOM from "react-dom/client"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Table from './components/Table';
// import Datatable from './components/Table';

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
    <Route path='/form' element={<Form />} />
    <Route path='/testapi' element={<Admin/>} />
    
     {/* <Route path='/testapi' element={<Table/>} /> */}
          </Route>
    </Routes>
  </div>
      </Router>
    </>
  );
}

export default App;
