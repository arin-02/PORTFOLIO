import React from 'react'
import Gallery from './Component/Gallery'
import Mbody from './Component/Mbody'
import Navbar from './Component/Navbar'
import Projectsarin from './Component/Projectsarin'
import Tictactoe from './Component/Tictactoe'

import mbimg from './mbimg.jpg'
import projectimg from './projectimg.jpg'

import './App.css'
import Footer from './Component/Footer'
import Abovefoot from './Component/Abovefoot'
function App() {
  return (
    <>
    <div className='bg-cover bg-no-repeat overflow-hidden ' style={{backgroundImage:`url(${mbimg})`}} >
      <Navbar/>
      <Mbody/>
      <Tictactoe/>
    </div>
    <div className='bg-cover bg-no-repeat overflow-hidden ' >
      </div>
      <div className='bg-cover bg-no-repeat overflow-hidden ' style={{backgroundImage:`url(${projectimg})`}}>
      <Gallery/>
      <Projectsarin/>
      </div>
      <Abovefoot/>
      <div className="" style={{backgroundColor:"#7510F7"}} >
        <Footer/>
      </div>
      </>
  )
}

export default App
