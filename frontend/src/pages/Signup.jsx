import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link} from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [ data, setData ] = useState({
    fullName:"",
    email:"",
    password:""
  });  
  const {signup}=useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(data,navigate);
  };

  
  return (
    <div id="signup" className='px-6 bg-slate-200 flex items-center w-full h-screen justify-center'>
      <Toaster />
      <form onSubmit={handleSubmit} className='p-6  bg-white shadow-md rounded-md w-[80%] md:w-[50%]'>
        <h1 className='font-semibold mt-6 text-green-600 text-3xl text-center'>Register Now</h1>
        <div className='flex flex-col gap-4'>
          <label htmlFor="fullName" className='font-semibold'>Full Name: </label>
          <input
            required
            onChange={handleChange}
            name="fullName"
            placeholder='Enter your Full Name'
            className='px-4 border-gray-400 border outline-none py-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <label htmlFor="email" className='font-semibold'>Email: </label>
          <input
            required
            type="text"
            name="email"
            onChange={handleChange}
            placeholder='Enter Email: '
            className='px-4 border-gray-400 border outline-none py-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <label htmlFor="password" className='font-semibold'>Password: </label>
          <input
            required
            type="text"
            name="password"
            onChange={handleChange}
            placeholder='Enter Password: '
            className='px-4 border-gray-400 border outline-none py-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <button
            className='px-4 py-2 hover:bg-green-600 transition-colors ease-in-out bg-green-500 rounded-lg text-white text-lg'
            type='submit'
          >
            Register
          </button>
          <p>Already having an Account? <span className='underline'><Link to="/login">login</Link></span> </p>

        </div>
      </form>
    </div>
  );
};

export default Signup;
