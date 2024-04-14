import React, { useState, useEffect } from 'react'
import PersonList from './components/UserList'
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { deleteUser, putUser } from './components/constants/url';

function Admin() {
    const navigateTo = useNavigate();
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")

    const goToLogIn = () => {
        navigateTo('/login');
    }

    const deleteUserFunc = (e) => {
        console.log(username)
        axios.delete(deleteUser, {
            data: {
                username: username
            }
        }).then(res => {
            console.log(res)
        })
    }

    const updateUserFunc = (e) => {
        console.log(username)
        axios.post(putUser, {
            username: username,
            name: name
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <PersonList />
            <div className='flex gap-6 justify-center items-center h-[90svh]'>
                <div className='shadow-lg p-12 flex flex-col gap-6 justify-center items-center w-96 bg-gray-100'>
                    <form className='flex flex-col gap-2 mt-2 w-full' onSubmit={() => { }}>
                        <input type='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='p-3 bg-gray-200 text-md w-full placeholder:text-md ml-1 placeholder:font-semibold focus:outline-none text-semibold  rounded-md placeholder:text-purple-700'></input>
                        <input type='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} className='p-3 bg-gray-200 text-md w-full placeholder:text-md ml-1 placeholder:font-semibold focus:outline-none text-semibold  rounded-md placeholder:text-purple-700'></input>
                        <button type='' className='border bg-red-700 border-gray-500 mt-2' onClick={deleteUserFunc}>Delete User</button>
                        <button type='' className='border border-gray-500 mt-2' onClick={updateUserFunc}>Update User</button>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Admin