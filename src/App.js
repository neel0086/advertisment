import React, { useEffect } from 'react'
import BlogPage from './Components/Blogpage/BlogPage'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Profile from './Components/Profile/Profile';
import { login, selectUser } from './Components/features/userSlice';
import { auth } from './firebase';
import Login from './Components/Auth/Login';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          uuid: user.uid,
          photoUrl: user.photoURL

        }))
      }
    })
  }, [])
  return (
    <>

      <Router>
        
          <div className='App'>
            <NavBar />
            <Routes>
              <Route path="/" element={<BlogPage />}></Route>
            </Routes>
            <Routes>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        
      </Router>
    </>
  )
}

export default App
