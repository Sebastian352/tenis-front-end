import React, { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from './components/constants/url';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useNavigate();

  const goToSignUp = () => {
    navigateTo('/signup');
  }

  const goToMain = () => {
    navigateTo('/')
  }

  const login = (e) => {
    e.preventDefault()
    axios.post(loginUser, {
      username: username,
      password: password
    }).then(res => {
      console.log(res);
      if (res.status == 200) {
        goToMain()
      }
    })
  }

  return (
    <div className='flex gap-6 justify-center items-center h-[90svh]'>
      <div className='shadow-lg p-12 flex flex-col gap-6 justify-center items-center w-96 bg-gray-100'>
        <p className='text-lg font-semibold text-black'> Log Into Your Account</p>
        <form className='flex flex-col gap-2 mt-2 w-full' onSubmit={login}>
          <input type='username' placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} className='p-3 bg-gray-200 text-md w-full placeholder:text-md ml-1 placeholder:font-semibold focus:outline-none text-semibold  rounded-md placeholder:text-purple-700'></input>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 placeholder:text-purple-700 placeholder:font-semibold bg-gray-200 text-md w-full placeholder:text-md ml-1 focus:outline-none text-semibold  rounded-md'></input>
          <button type='submit' className='bg-purple-700 text-black mt-2'>Log in</button>
          <div className='flex justify-center'>
            <p className='text-medium text-lg text-black'>Or</p>
          </div>
          <button type='submit' className='border border-gray-500 mt-2' onClick={goToSignUp} >Go to Sign up</button>
        </form>
      </div>
    </div >
  )
}

export default Login