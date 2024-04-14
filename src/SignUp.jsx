import React, { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerUser } from './components/constants/url';

function SignUp() {
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate();
    const [username, setUsername] = useState("")

    const signUp = (e) => {
        axios.post(registerUser, {
            username: username,
            password: password
        }).then(res => {
            console.log(res);
        })
    }

    const goToLogIn = () => {
        navigateTo('/login');
    }

    return (
        <div className='flex gap-6 justify-center items-center h-[90svh]'>
            <div className='shadow-lg p-12 flex flex-col gap-6 justify-center items-center w-96 bg-gray-100'>
                <p className='text-lg font-semibold text-black'> Sign up as a new barber</p>
                <form className='flex flex-col gap-2 mt-2 w-full' onSubmit={signUp}>
                    <input type='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='p-3 bg-gray-200 text-md w-full placeholder:text-md ml-1 placeholder:font-semibold focus:outline-none text-semibold  rounded-md placeholder:text-purple-700'></input>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 placeholder:text-purple-700 placeholder:font-semibold bg-gray-200 text-md w-full placeholder:text-md ml-1 focus:outline-none text-semibold  rounded-md'></input>
                    <button type='submit' className='bg-purple-700 text-white mt-2'>Sign up</button>
                    <div className='flex justify-center'>
                        <p className='text-medium text-lg text-black'>Or</p>
                    </div>
                    <button type='submit' className='border border-gray-500 mt-2' onClick={goToLogIn}>Go to Login</button>
                </form>
            </div>
        </div >
    )
}

export default SignUp