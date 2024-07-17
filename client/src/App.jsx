import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sign-in' element={<Signin/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </div>
  )
}

export default App