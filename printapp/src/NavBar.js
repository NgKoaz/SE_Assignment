import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './assets/UserContext'
import Logo from './Logo';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
    const {setUsername} = useContext(UserContext);

    const Logout = (e) => {
        e.preventDefault();
        axios.post('/logout').then(() => {
            setUsername('');
        });
        
    }

  return (
    <ul className="bg-white flex h-1/6 max-h-24 border-b-2 border-black">
        <li className="">
            <Logo />
        </li>
        <Link className="" to="/">
            <li className="flex-none w-44 h-full text-2xl font-semibold hover:bg-blue-300">
                TRANG CHỦ
            </li>
        </Link>
        <Link to="/printing">
            <li className="flex-none w-44 h-full text-2xl font-semibold hover:bg-blue-300">
                IN
            </li>
        </Link>
        <Link to="/buying">
            <li className="flex-none w-44 h-full text-2xl font-semibold hover:bg-blue-300">
                MUA GIẤY
            </li>
        </Link>
        <li className="flex-none w-44 h-full text-2xl font-semibold hover:bg-blue-300">
            <Avatar />
        </li>
        <li className="flex-none w-44 h-full text-2xl font-semibold hover:bg-blue-300">
            <button onClick={Logout}>Log out</button>
        </li>
    </ul>
  )
}

export default NavBar