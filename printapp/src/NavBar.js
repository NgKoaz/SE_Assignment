import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './assets/UserContext';
import Logo from './Logo';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
    const { setUsername } = useContext(UserContext);

    const Logout = (e) => {
        e.preventDefault();
        axios
        .post('/logout')
        .then(() => {
            setUsername('');
        })
        .catch((error) => {
            // Handle error safely
            console.error(error);
        });
    };

  return (
    <nav className="border-b-2 border-black">
        <ul className="h-24 flex justify-center items-center">
            <li className="">
                <Link to="/">
                    <Logo />
                </Link>
            </li>
            <li className="h-24 w-24 text-xl font-semibold">
                <Link to="/">Trang chủ</Link>
            </li>
            <li className="h-24 w-24 text-xl font-semibold">
                <Link to="/printing">In</Link>
            </li>
            <li className="h-24 w-24 text-xl font-semibold">
                <Link to="/buying">Mua giấy</Link>
            </li>
            <li className="inline-block  h-full text-2xl font-semibold hover:bg-blue-300">
                <button onClick={Logout}>Đăng xuất</button>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar;