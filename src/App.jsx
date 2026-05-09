import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import Manager from "./components/Manager.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0, 0.00%, 100.00%, 0.00)_0,rgba(86, 176, 47, 0.5)_100%)]">
            <Manager />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App