import React from 'react'
import BlogPage from './Components/Blogpage/BlogPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
function App() {
  return (
    <div>
      
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<BlogPage/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
