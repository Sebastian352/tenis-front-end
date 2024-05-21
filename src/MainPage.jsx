import React from 'react'
import { notify } from './components/constants/url';
import axios from 'axios';

function MainPage() {
    const notifyAdmin = () => {
        axios.post(notify)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div>
            <button type='' className='border bg-red-700 border-gray-500 mt-2' onClick={notifyAdmin}>Notify Admin for Tournament</button>
        </div>
    )
}

export default MainPage