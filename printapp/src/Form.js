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
    const [isSignUpError, setIsSignUpError] = useState(false);
    const [isRemember, setIsRemember] = useState(true)
    const { setCookie } = useContext(UserContext)
    //Send form

    async function signUp(){
        let url = "/user/signup";
        try {
            await axios.post(url, {userName: username, password});
            setSignUpStatus("Sign up successfully!");
            setIsSignUpError(false)
        } catch (error) {
            setIsSignUpError(true)
            if (error.response){
                switch (error.response.status){
                    case 400:
                        setSignUpStatus("Tên tài khoản đã tồn tại!")
                        break
                    case 500:
                        setSignUpStatus("Lỗi từ máy chủ!")
                        break
                    default:
                        setSignUpStatus("Lỗi bất thường! Vui lòng thao tác lại.")
                }
            }
        }
    }

    async function signIn(){
        let url = "/user/signin";
        try {
            const {data} = await axios.post(url, {userName: username, password});
            if (data && data.token){
                if (isRemember) setCookie('token', data.token, 30)
                else setCookie('token', data.token, 1)

                setToken(data.token)
            }
        } catch (error) {
            if (error.response){
                switch (error.response.status){
                    case 400:
                    case 404:
                        setSignInStatus("Sai tài khoản hoặc mật khẩu!")
                        break
                    default:
                        setSignInStatus("Lỗi bất thường! Vui lòng thao tác lại.")
                }
            }
        }
    }

    async function handleSummit(event){
        event.preventDefault();
        if (isRegister) signUp();
        else signIn();
    }

    function handleClickChangeForm(event){
        event.preventDefault();
        setIsRegister(!isRegister);
        setUsername('');
        setPassword('');
        setSignUpStatus('')
        setSignInStatus('')
    }


  return (
    <div className="bg-blue-400 flex justify-center items-center h-screen w-screen">
        {(isRegister === false) ? 
        (
            <div className="w-500px p-6 shadow-1g bg-white rounded-lg">
                <h1 className="text-4xl block text-center font-semibold">Đăng nhập</h1>
                <hr className="mt-3 mb-3"/>
                <form method="post" onSubmit={handleSummit}>
                    <div>
                        <label htmlFor="username" className="block text-base mb-2 font-semibold">Tài khoản</label>
                        <input 
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                                setSignInStatus('')
                            }}
                            placeholder="Username"
                            required 
                            className="border-2 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                            />
                        <br />
                        <label htmlFor="password" className="block text-base my-2 font-semibold">Mật khẩu</label>
                        <input 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setSignInStatus('')
                            }}
                            placeholder="Password"
                            required 
                            className="border-2 w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <input id="remember" type="checkbox" checked={isRemember} onChange={e => setIsRemember(!isRemember)} />
                            <label htmlFor="remember" className="text-base ml-2">Lưu đăng nhập</label>
                        </div>
                        
                    </div>
                    <div className="mt-5">
                        <input 
                            type="submit"
                            value="Đăng nhập" 
                            className="border-4 border-indigo-700 bg-indigo-700 text-xl text-white py-2 px-5 rounded-lg w-full font-semibold hover:opacity-70"
                        />
                    </div>
                </form>

                {signInStatus && 
                    <div className="py-2 font-semibold text-red-500" >
                        {signInStatus}
                    </div>
                }


                <div className="mt-10 w-full flex">
                    <div className="text-gray-400 w-full text-sm text-center">
                        Chưa có tài khoản? <button onClick={handleClickChangeForm} className="text-indigo-600 underline italic">Đăng kí tài khoản</button>
                    </div>
                </div>
            </div>
        )
        :
        (
            <div className="w-500px p-6 shadow-1g bg-white rounded-lg">
                <h1 className="text-4xl block text-center font-semibold">Đăng kí tài khoản</h1>
                <hr className="mt-3 mb-3"/>
                <form method="post" onSubmit={handleSummit}>
                    <div>
                        <label htmlFor="username" className="block text-base mb-2 font-semibold">Tài khoản</label>
                        <input 
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                                setSignUpStatus('')
                            }}
                            placeholder="Username"
                            required 
                            className="border-2 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                            />
                        <br />
                        <label htmlFor="password" className="block text-base my-2 font-semibold">Mật khẩu</label>
                        <input 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setSignUpStatus('')
                            }}
                            placeholder="Password"
                            required 
                            className="border-2 w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="submit"
                            value="Đăng kí" 
                            className="border-4 border-indigo-700 bg-indigo-700 text-xl text-white py-2 px-5 rounded-lg w-full font-semibold hover:opacity-70"
                        />
                    </div>        
                </form>

                {signUpStatus && 
                    <div className={`py-2 font-semibold ${(isSignUpError) ? "text-red-500" : "text-green-500"}`} >
                        {signUpStatus}
                    </div>
                }

                <div className="mt-10 w-full flex">
                    <div className="text-gray-400 w-full text-sm text-center">
                        Đã có tài khoản? <button onClick={handleClickChangeForm} className="text-indigo-600 underline italic">Đăng nhập ở đây</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Form