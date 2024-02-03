import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Contact from "./Components/Contact/Contact"
import Footer from './Components/Footer/Footer'
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Service/Services"
import './App.css'


function App() {


  return (
    <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
