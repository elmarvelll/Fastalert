import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Navbar from './Components/Navbar';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import Footer from './Components/Footer.jsx';
function App() {
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

export default App;
