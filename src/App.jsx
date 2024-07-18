import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Sec1 from './components/sec1';
import Homepage from './components/homepage';
import Sec2 from './components/sec2';
import Sec3 from './components/sec3';
import Sec4 from './components/sec4';
import Add from './components/add';
import Add2 from './components/add2';
import Footer from './components/footer';
import Sec6 from './components/sec6';
import Sec7 from './components/sec7';
import Sec8 from './components/sec8';

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Sec1></Sec1>
    <Homepage></Homepage>
    <Sec2></Sec2>
    <Sec3></Sec3>
    <Sec4></Sec4>
    <Add></Add>
    <Sec6></Sec6>
    <Sec7></Sec7>
    <Sec8></Sec8>
    
    <Add2></Add2>
    <Footer></Footer>
    </>

  )
}

export default App
