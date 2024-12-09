
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetail from './pages/ProjectDetails/ProjectDetail'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import Subscription from './pages/Subscription/Subscription'
import Auth from './pages/Auth/Auth'

function App() {

  return (
    <>
    {true ? <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<ProjectDetail/>}/>
      <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>}/>
      <Route path='/upgrade-plan' element={<Subscription/>}/>


    </Routes>
    </div>:<Auth/>
    
  }
   
    </>
  )
}

export default App
