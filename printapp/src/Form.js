import axios from 'axios';
import React, { useContext, useState } from 'react'
import UserContext from './assets/UserContext';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUsername:setLoggedInUsername} = useContext(UserContext);
    const navigate = useNavigate()

    //Send form
    async function handleSummit(event){
        event.preventDefault();
        const url = '/login';
        const {data} = await axios.post(url, {username, password});
        setLoggedInUsername(data.username);
        navigate('/')
    }

  return (
    <div className="bg-blue-400 flex justify-center items-center h-screen w-screen">
        <div className="w-1/4 p-6 shadow-1g bg-white rounded-lg">
            <h1 className="text-4xl block text-center font-semibold">Login</h1>
            <hr className="mt-3 mb-3"/>
            <form method="post" onSubmit={handleSummit}>
            <div>
                <label for="username" className="block text-base mb-2 font-semibold">Username</label>
                <input 
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your username"
                    required 
                    className="border-2 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    />
                <br />
                <label for="password" className="block text-base mb-2 font-semibold">Password</label>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    required 
                    className="border-2 w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600"
                />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                <input id="remember" type="checkbox" />
                <label for="remember" className="text-base ml-2">Remember me</label>
                </div>
                <div className="text-indigo-500 font-semibold">
                Forgot Password?
                </div>
            </div>
            <div className="mt-5">
                <input 
                    type="submit"
                    value="Login" 
                    className="border-4 border-indigo-700 bg-indigo-700 text-xl text-white py-2 px-5 rounded-lg w-full hover:bg-transparent hover:text-indigo-700 font-semibold"
                />
            </div>
            </form>

            
        </div>
    </div>
  )
}

export default Form