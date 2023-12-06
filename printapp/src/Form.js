import axios from 'axios';
import React, { useContext, useState } from 'react'
import UserContext from './assets/UserContext';
import './index.css';

const Form = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signUpStatus, setSignUpStatus] = useState('');
    const [signInStatus, setSignInStatus] = useState('');
    const {setToken} = useContext(UserContext);

    //Send form

    async function signUp(){
        let url = "/user/signup";
        try {
            const {data} = await axios.post(url, {userName: username, password});
            setSignUpStatus("Sign up successfully!");
        } catch (error) {
            if (error.response && error.response.status === 400){
                setSignUpStatus("Username already exists!");
            }
        }
    }

    async function signIn(){
        let url = "/user/signin";
        try {
            const {data} = await axios.post(url, {userName: username, password});
            if (data && data.token){
                localStorage.setItem('accessToken', data.token)
                //setSignInStatus("Sign in successfully!");
                setToken(data.token)
            }
        } catch (error) {
            if (error.response && error.response.status === 400){
                setSignInStatus("Username already exists!");
            }
        }
    }

    async function handleSummit(event){
        event.preventDefault();
        if (isRegister) signUp();
        else signIn();
        //setLoggedInUsername(data.username);
        //navigate('/')
    }

    function handleClickChangeForm(event){
        event.preventDefault();
        setIsRegister(!isRegister);
        setUsername('');
        setPassword('');
        console.log(isRegister);
    }


  return (
    <div className="bg-blue-400 flex justify-center items-center h-screen w-screen">
        {(isRegister === false) ? 
        (
            <div className="w-500px p-6 shadow-1g bg-white rounded-lg">
                <h1 className="text-4xl block text-center font-semibold">Login</h1>
                <hr className="mt-3 mb-3"/>
                <form method="post" onSubmit={handleSummit}>
                    <div>
                        <label htmlFor="username" className="block text-base mb-2 font-semibold">Username</label>
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
                        <label htmlFor="password" className="block text-base my-2 font-semibold">Password</label>
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
                        <label htmlFor="remember" className="text-base ml-2">Remember me</label>
                        </div>
                        <div className="text-indigo-500 font-semibold">
                        Forgot Password?
                        </div>
                    </div>
                    <div className="mt-5">
                        <input 
                            type="submit"
                            value="Login" 
                            className="border-4 border-indigo-700 bg-indigo-700 text-xl text-white py-2 px-5 rounded-lg w-full font-semibold hover:opacity-70"
                        />
                    </div>
                </form>
                {signInStatus && <div>{signInStatus}</div>}
                <div className="mt-10 w-full flex">
                    <div className="text-gray-400 w-full text-sm text-center">
                        Not have an account? <button onClick={handleClickChangeForm} className="text-indigo-600 underline italic">Create an account</button>
                    </div>
                </div>
            </div>
        )
        :
        (
            <div className="w-500px p-6 shadow-1g bg-white rounded-lg">
                <h1 className="text-4xl block text-center font-semibold">Register</h1>
                <hr className="mt-3 mb-3"/>
                <form method="post" onSubmit={handleSummit}>
                    <div>
                        <label htmlFor="username" className="block text-base mb-2 font-semibold">Username</label>
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
                        <label htmlFor="password" className="block text-base my-2 font-semibold">Password</label>
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
                    <div className="mt-5">
                        <input 
                            type="submit"
                            value="Sign up" 
                            className="border-4 border-indigo-700 bg-indigo-700 text-xl text-white py-2 px-5 rounded-lg w-full font-semibold hover:opacity-70"
                        />
                    </div>        
                </form>
                {signUpStatus && <div>{signUpStatus}</div>}
                <div className="mt-10 w-full flex">
                    <div className="text-gray-400 w-full text-sm text-center">
                        Already have an account? <button onClick={handleClickChangeForm} className="text-indigo-600 underline italic">Sign in here</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Form