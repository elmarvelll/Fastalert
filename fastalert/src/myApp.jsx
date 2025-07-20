import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Navbar from './Components/Navbar';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import Footer from './Components/Footer.jsx';
function myApp() {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <div className="App">
     <Navbar />
     <FirstPage />
     <SecondPage />
     <Footer />
    </div>
  );
}

export default myApp;
