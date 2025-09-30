import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import AvailabilityTable from './components/AvailabilityTable'
import Neighbourhood from './components/Neighbourhood'
import BuildingAmenities from './components/BuildingAmenities'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'
import UpcomingProject from './components/UpcomingProject'
import {Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <>
    <Header />
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/upcomingProject' element={<UpcomingProject/>}/>
        <Route path='/neighbourhood' element={<Neighbourhood/>}/>
        <Route path='/buidingammenties' element={<BuildingAmenities/>}/>
        <Route path='/newsFeed' element={<NewsFeed/>}/>

      </Routes>
      <Home />
      <About />
      <UpcomingProject />
      {/* <Services/> */}
      <Neighbourhood/>
      <BuildingAmenities/>
      <NewsFeed/>
       {/* <AvailabilityTable /> */}
    </div>
    <Footer/>
    </>
  )
}

export default App
