import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home.jsx'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/home'  element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routers
