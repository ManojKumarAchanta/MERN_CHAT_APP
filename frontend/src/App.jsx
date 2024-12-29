import React, { useEffect } from 'react';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes,Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './store/authStore';
import  Home  from './pages/Home';
import LoadingSpin from "react-loading-spin";
const App = () => {

  const {authUser,checkAuth,isCheckingAuth}=useAuth();
  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  return (
    <div className='relative'>
      <Toaster/>
      {isCheckingAuth?(<div className='flex justify-center w-full h-screen items-center'><div><LoadingSpin/></div></div>):(<div>
      <Navbar/>
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Login/>}/>
        <Route path="/signup" element={!authUser?<Signup/>:<Navigate to="/"/>}/>
        <Route path="/login" element={!authUser?<Login/>:<Navigate to="/"/>}/>
        <Route path="/profile" element={!authUser?<Login/>:<Profile/>}/>
      </Routes>
      </div>)}
    </div>
  )
}

export default App
