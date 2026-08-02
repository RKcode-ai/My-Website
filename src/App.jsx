import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {Routes, Route} from "react-router-dom";
import Projects from "./pages/Projects.jsx";

const App = () => {
    return (
       <>
           <Navbar />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />
           </Routes>
           <Footer />
       </>
    )
}
export default App
