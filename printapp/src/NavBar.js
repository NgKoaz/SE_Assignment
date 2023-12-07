import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './assets/UserContext';
import Avatar from './Avatar'
import Logo from './Logo';

const NavBar = () => {
    const [openConfModal, setOpenConfModal] = useState(false)
    const [isRefreshing, setRefreshing] = useState(false)
    const { username, paper, setToken, getUserInfo, loadAllList, setCookie } = useContext(UserContext);
    const navigate = useNavigate()

    function handleLogOut(event){
        setOpenConfModal(false)
        setToken('');
        setCookie('token', '', 1)
        navigate('/')
        getUserInfo()        
    }

    function handleRefresh(event){
        if (isRefreshing) return;
        setRefreshing(true)
        loadAllList()
        setTimeout(() => {
            setRefreshing(false)
        }, 3000)
    }

    function ConfirmationModal(){
        return(
            <div className="w-100vw h-100vh fixed flex justify-center z-30">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="h-250px w-400px mx-auto mt-20 bg-white rounded flex flex-col items-center justify-around z-20">
                    <div>
                        <h2 id="title-modal" className="text-2xl font-semibold">Xác nhận muốn đăng xuất</h2>
                    </div>
                    <div>
                        <p id="body-modal" className="text-xl">Bạn có muốn đăng xuất không?</p>
                    </div>
                    <div id="footer-modal" className="flex gap-12">
                        <button
                            onClick={e => setOpenConfModal(false)}
                            className="bg-red-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                        >
                            Quay về
                        </button>
                        <button
                            className="bg-blue-500 text-base font-bold text-white py-2 px-3 rounded-lg"
                            onClick={handleLogOut}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        <nav className="h-20 w-full sticky top-0 flex justify-between border-b-2 border-black bg-white z-20">
            <div className="flex ">
                <div className="ml-20 mr-10 px-2 py-2">
                    <Logo />
                </div>
                <ul className="flex justify-center">
                    <li className="h-full px-2 hover:bg-gray-300 flex items-center ">
                        <Link className="h-full flex items-center" to="/" >
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
                <button 
                    className="px-3 py-1 rounded-xl text-center text-white bg-blue-500 hover:opacity-70"
                    onClick={handleRefresh}
                >
                    Làm mới
                </button>
                <div className="p-5 flex flex-col justify-around text-base font-semibold">
                    <div className="">
                        {username}
                    </div>
                    <div className="text-green-500">
                        Còn lại: {paper} tờ
                    </div>
                    <button 
                        onClick={e => setOpenConfModal(true)}
                        className="w-24 bg-gray-500 rounded-xl text-center text-white hover:opacity-70"

                    >
                        Đăng xuất
                    </button>
                </div>
                <div className="">
                    <Avatar />
                </div>
            </div>
        </nav>
        {openConfModal && <ConfirmationModal />}
    </>
  );
};

export default NavBar;