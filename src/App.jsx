
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetail from './pages/ProjectDetails/ProjectDetail'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<ProjectDetail/>}/>
    </Routes>
    </>
  )
}

export default App
