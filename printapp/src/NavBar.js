import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './assets/UserContext';
import Avatar from './Avatar'
import Logo from './Logo';
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
    <nav className="h-20 w-full sticky top-0 flex justify-between border-b-2 border-black bg-gray-200">
        <div className="flex ">
            <div className="ml-20 mr-10 px-2 py-2">
                <Logo />
            </div>
            <ul className="flex justify-center">
                <li className="h-full px-2 hover:bg-gray-300 flex items-center ">
                    <Link className="h-full flex items-center" to="/">
                        <div className="inline-block w-24 text-xl font-semibold text-center ">
                            In tài liệu
                        </div>
                    </Link>
                </li>
                <li className="h-full px-2 hover:bg-gray-300 flex items-center">
                    <Link className="h-full flex items-center" to="/buying">
                        <div className="inline-block w-24 text-xl font-semibold text-center">
                            Mua giấy
                        </div>
                    </Link>
                </li>
                <li className="h-full px-2 hover:bg-gray-300 flex items-center">
                    <Link className="h-full flex items-center" to="/history">
                        <div className="inline-block w-24 text-xl font-semibold text-center">
                            Lịch sử
                        </div>
                    </Link>
                </li>
            </ul>            
        </div>

        <div className="flex items-center mr-24">
            <div className="p-5 flex flex-col justify-around text-base font-semibold">
                <div className="">
                    Nguyễn Đăng Khoa
                </div>
                <div className="text-green-500">
                    Còn lại: 50 trang
                </div>
                <button 
                    onClick={Logout}
                    className="w-24 bg-gray-500 rounded-xl text-center text-white"
                >
                    Đăng xuất
                </button>
            </div>
            <div className="">
                <Avatar />
            </div>
        </div>

        
    </nav>
  );
};

export default NavBar;