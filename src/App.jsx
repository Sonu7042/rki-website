import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Neighbourhood from './components/Neighbourhood'
import BuildingAmenities from './components/BuildingAmenities'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'
import UpcomingProject from './components/UpcomingProject'
import {Routes, Route} from 'react-router-dom'
import Property from './components/Property'
import Contact from './components/Contact'
import Service from './components/Service'






// for home 
const SubHome=()=>{
  return(
    <>
    <Home />
    <About />
    <UpcomingProject />
    <Neighbourhood />
    <BuildingAmenities />
    <NewsFeed />
    </>
  )
}


const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<SubHome/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    <Footer/> 
    </>
  )
}

export default App
